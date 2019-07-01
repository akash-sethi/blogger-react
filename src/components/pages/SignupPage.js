import React from'react';
import {Grid, Header, Image, Message} from "semantic-ui-react";
import {Link} from "react-router-dom";
import SignupForm from "../forms/SignupForm";
import { connect } from "react-redux";
import { signup } from '../../actions/user'
import PropTypes from 'prop-types';

class SignupPage extends React.Component{
    submit = (data) =>
        this.props.signup(data).then(() => this.props.history.push('/'));

    render(){
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo.jpg' /> Register new account
                    </Header>
                    <SignupForm submit={this.submit}/>
                    <Message>
                        Have account? <Link to='/login'>Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

SignupPage.propTypes = {
    signup : PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null, { signup })(SignupPage)