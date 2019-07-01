const mongoose = require('mongoose');
require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    hash: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.generateToken = function (){
    return jwt.sign({ email: this.email, isAdmin: this.isAdmin, name: this.name }, process.env.private_key, { expiresIn: 60 * 60 })
};

const User = mongoose.model('User', UserSchema);

const validateUser = user => {
    const schema = {
        email: Joi.string().email().min(5).max(100).required(),
        name: Joi.string().min(2).max(100).required(),
        hash: Joi.string().min(8).max(16).required(),
    };

    return Joi.validate(user, schema);
};

exports.User = User;
exports.validateUser = validateUser;