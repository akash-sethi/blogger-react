import axios from 'axios';
import {setJWT} from "./utils/utils";

const BASE_PATH = 'http://localhost:8080';

const api = {
    createUser: data =>
         axios.post(`${BASE_PATH}/user/save`, data).then(res => {
             setJWT(res.headers['x-auth-token']);
             return res.data
         }),
    auth: data =>
        axios.post(`${BASE_PATH}/user/login`, data).then(res => {
            setJWT(res.headers['x-auth-token']);
            return res.data
        }),
    validate: (token) =>
        axios.get(`${BASE_PATH}/user/validate`, { headers: { Authorization: `${token}` } }),
    blogs : () =>
        axios.get(`${BASE_PATH}/blog`).then(res => res.data),

    blog : (id) =>
        axios.get(`${BASE_PATH}/blog/${id}`).then(res => res.data),
    addComment: data =>
        axios.post(`${BASE_PATH}/comment/${data.id}`, {comment: data.comment}, {}).then(res => res.data)
};

export default api;