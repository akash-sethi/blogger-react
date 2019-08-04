import React from "react";
import {Button, Form, Segment} from "semantic-ui-react";
import PropTypes from 'prop-types';
import Validator from "validator";
import InlineError from "../messages/InlineError";

class SignupForm extends React.Component {

    state = {
        data: {
            email: '',
            name: '',
            hash: '',
            passwordAgain: ''
        },
        errors: {},
        loading: false
    };

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    };

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        if(Object.keys(errors).length){
            this.setState({errors: errors});
        } else {
            this.setState({
                loading: true
            });
            const {passwordAgain, ...data} = this.state.data;
            this.props.submit(data)
                .catch(err =>{
                    this.setState({loading: false, errors: { global: err.response.data.message}})
                })
        }
    };

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) {
            errors.email = 'invalid email';
        }
        if(!data.hash) {
            errors.password = 'invalid password';
        }
        if(data.hash && !data.passwordAgain){
            errors.passwordAgain = 'please re-enter password';
        }
        if(!data.name){
            errors.name = 'please enter name';
        }
        if(data.hash !== data.passwordAgain){
            errors.global = 'password mismatch';
        }
        return errors;
    };

    render() {
        const { data, loading, errors } = this.state;

        return (
            <Form size='large' loading={loading}>
                {Object.keys(errors).map((k, i) => <InlineError key={i} text={errors[k]}/>)}
                <Segment stacked>
                    <Form.Input error={!!errors.email} onChange={this.onChange} id='email' name='email' value={data.email} fluid icon='user' iconPosition='left' placeholder='E-mail address*' />
                    <Form.Input error={!!errors.name} onChange={this.onChange} id='name' name='name' value={data.name} fluid icon='user' iconPosition='left' placeholder='Name*' />
                    <Form.Input
                        error={!!errors.password}
                        onChange={this.onChange}
                        id='hash'
                        name='hash'
                        value={data.hash}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Form.Input
                        error={!!errors.passwordAgain}
                        onChange={this.onChange}
                        id='passwordAgain'
                        name='passwordAgain'
                        value={data.passwordAgain}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Re-enter password'
                        type='password'
                    />
                    <Button color='teal' fluid size='large' onClick={this.onSubmit}>
                        Register
                    </Button>
                </Segment>
            </Form>
        )
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;
