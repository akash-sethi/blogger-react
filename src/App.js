import React from 'react';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { connect } from 'react-redux';
import GuestRoute from "./components/routes/GuestRoute";
import PropTypes from 'prop-types';
import TopNavigation from "./components/navigation/TopNavigation";
import BlogDetail from "./components/blogs/BlogDetail";
import {Route} from "react-router-dom";

const App = ({location}) => (
    <div>
        <TopNavigation/>
        <Route component={HomePage} path='/' exact/>
        <Route component={BlogDetail} path='/blog/:id' exact/>
        <GuestRoute location={location} path='/login' exact component={LoginPage}/>
        <GuestRoute location={location} path='/signup' exact component={SignupPage}/>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
};


export default connect()(App);
