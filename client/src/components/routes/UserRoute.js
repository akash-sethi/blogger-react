import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const UserRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
        isAuthenticated? <Component {...props}/>: <Redirect to='/login'/>}
    />
);

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email
    }
}

UserRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired
};

export default connect(mapStateToProps)(UserRoute);
