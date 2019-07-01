import React from'react';
import LoginForm from "../forms/LoginForm";
import {Grid, Header, Image, Message} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../actions/user";
import PropTypes from 'prop-types';

class LoginPage extends React.Component {

    submit = (data) =>
        this.props.login(data).then(() => this.props.history.goBack());

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo.jpg' /> Log-in to your account
                    </Header>
                    <LoginForm submit={this.submit}/>
                    <Message>
                        New to us? <Link to='/signup'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }).isRequired,
};

export default connect(null, { login })(LoginPage)
