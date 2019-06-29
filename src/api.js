import axios from 'axios';
import {setJWT} from "./utils";

const BASE_PATH = 'http://localhost:8080';

const api = {
    createUser: data =>
         axios.post(`${BASE_PATH}/user/save`, data).then(res => res),
    auth: data =>
        axios.post(`${BASE_PATH}/user/login`, data).then(res => {
            console.log('result is: ', res);
            console.log('result is: ', res.headers);
            setJWT(res.headers['x-auth-token']);
            return res.data
        })

};

export default api;