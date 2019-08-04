import React from "react";
import {Button, Form, Segment} from "semantic-ui-react";
import PropTypes from 'prop-types';
import Validator from 'validator';

class LoginForm extends React.Component {

    state = {
        data: {
            email: '',
            password: ''
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
            this.props.submit(this.state.data).catch(err =>{
                this.setState({loading: false, errors: { global: err.response.data.message}})
            })
        }
    };

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)){
            errors.email = 'invalid email';
        }
        if(!data.password) {
            errors.password = 'invalid password'
        }
        return errors;
    };

    render() {
        const { data, loading, errors } = this.state;
        return (
            <Form size='large' loading={loading}>
                {errors.email? <span>{errors.email}</span>: errors.password? <span>{errors.password}</span>:''}
                <Segment stacked>
                    <Form.Input error={!!errors.email} onChange={this.onChange} id='email' name='email' value={data.email} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        error={!!errors.password}
                        onChange={this.onChange}
                        id='password'
                        name='password'
                        value={data.password}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Button color='teal' fluid size='large' onClick={this.onSubmit}>
                        Login
                    </Button>
                </Segment>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;
