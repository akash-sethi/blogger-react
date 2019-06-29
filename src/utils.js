import jwt from 'jsonwebtoken';

const TOKEN = 'token';

export const setJWT = token => localStorage.setItem(TOKEN, token);

export const getJWT = () => localStorage.getItem(TOKEN);

export const removeJWT = () => localStorage.removeItem(TOKEN);

export const decodeJWT = token => jwt.decode(token);

