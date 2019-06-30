import axios from 'axios';
import {setJWT} from "./utils";

const BASE_PATH = 'http://localhost:8080';

const api = {
    createUser: data =>
         axios.post(`${BASE_PATH}/user/save`, data).then(res => res.data),
    auth: data =>
        axios.post(`${BASE_PATH}/user/login`, data).then(res => {
            setJWT(res.headers['x-auth-token']);
            return res.data
        }),
    blogs : () =>
        axios.get('./initialState.json').then(res => res.data.blogs),

    blog : (id) =>
        axios.get('./initialState.json').then(res => res.data),
    addComment: data =>
        axios.post(`${BASE_PATH}/comment/save`, data).then(res => res.data)
};

export default api;