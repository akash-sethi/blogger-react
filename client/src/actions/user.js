import { USER_LOGGED_IN, UPDATE_USER, USER_LOGGED_OUT } from "../types/action.types";
import api from '../api';
import {removeJWT} from "../utils/utils";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const updateUser = user => ({
    type: UPDATE_USER,
    user
});

export const signup = data => dispatch =>
  api.createUser(data).then(user => {
    dispatch(userLoggedIn(user));
  });

export const login = data => dispatch =>
    api.auth(data).then(user => {
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    removeJWT();
    dispatch(userLoggedOut());
};





