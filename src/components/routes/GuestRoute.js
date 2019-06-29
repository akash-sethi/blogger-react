import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

const GuestRoute = ({isAuthenticated, component: Component, ...rest}) => (
  <Route
      {...rest}
      render={props =>
      !isAuthenticated? <Component {...props}/>: <Redirect to='/'/>}
  />
);

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.email
    }
}

GuestRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(GuestRoute)