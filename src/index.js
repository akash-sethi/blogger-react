import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {decodeJWT, getJWT} from "./utils";
import {userLoggedIn} from "./actions/user";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

if(getJWT()) {
    console.log('res: ', decodeJWT(getJWT()));
    store.dispatch(userLoggedIn(decodeJWT(getJWT())))
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
