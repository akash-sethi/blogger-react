import React from 'react';
import {Button, Form} from "semantic-ui-react";
import Alert from "../messages/Alert";
import PropTypes from 'prop-types';

class CommentForm extends React.Component{

    state = {
        data: {
            comment: '',
        },
        error: {},
        loading: false
    };

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    };

    submit = () => {
        const error = this.validate(this.state.data);
        if(Object.keys(error).length){
            this.setState({error: error});
        } else {
            this.setState({
                loading: true
            });
            this.props.submit(this.state.data).catch(err =>{
                this.setState({loading: false, error: { header: err.response.data.message}})
            })
        }
    }

    validate = (data) => {
        let error = {};
        if(!data.comment) {
            error = { header: 'Invalid input', text: 'Please enter a comment' }
        }
        return error;
    };

    render() {
        const {error, data, loading} = this.state;
        return (
            <Form reply loading={loading}>
                <Form.TextArea id='comment' name='comment' value={data.comment} onChange={this.onChange}/>
                <Button content='Add Comment' onClick={this.submit} labelPosition='left' icon='edit' primary />
                {error.header? <Alert header={error.header} text={error.text}/>:null}
            </Form>
        )
    }
}

CommentForm.propTypes = {
   submit: PropTypes.func
}

export default CommentForm;

