const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    dateCreated: {type: Date, default: Date.now() }
});

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200,
    },
    description: {
        type: String,
        required: true,
        minlength: 200
    },
    author: {
        type: String,
        required: true
    },
    comments: [CommentSchema],
    dateCreated: {type: Date, required: true},
    lastUpdated: {type: Date, default: Date.now()}
});

const validateBlog = blog => {
    var schema = {
        title: Joi.string().max(200).required(),
        description: Joi.string().min(200).required(),
        comments: Joi.array().items(Joi.object().keys({
            user: Joi.string().email().required(),
            comment: Joi.string().required(),
        })),
        author: Joi.string().email().required()
    }

    return Joi.validate(blog, schema)
};

const validateComment = comment => {
    var schema = {
        user: Joi.string().email().required(),
        comment: Joi.string().required(),
    };

    return Joi.validate(comment, schema);
};

const Blog =  mongoose.model('Blog' ,BlogSchema);

exports.Blog = Blog;
exports.validateBlog = validateBlog;
exports.validateComment = validateComment;

