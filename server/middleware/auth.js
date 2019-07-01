const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token){
        return res.status(401).json({status: 401, message: 'user not authorized'});
    }

    try {
        req.user = jwt.verify(token, process.env.private_key);
        next();
    }catch (e) {
        return res.status(400).json({status: 400, message: 'invalid token. please login again'});
    }
};
