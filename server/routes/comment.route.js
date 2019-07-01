const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { validateComment, Blog } = require('../models/blog.model');
const auth = require('../middleware/auth');
const {User} = require('../models/user.model');


router.post('/:id', auth, async (req, res) => {
    console.log('hererere: ', req.user.email)
   const user = await User.findOne({email: req.user.email});
    if(!user) {
       return res.status(400).json({status: 'fail', message: 'something went wrong, please try again'})
    }

    const {error} = validateComment({...req.body, user: user.email});
    if(error){
        return res.status(400).json({status: 'fail', message: error.details[0].message})
    }

    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {$push: { comments: {...req.body, user: user.email}}},
            { safe: true, new: true });
        if(!blog) {
            return res.status(400).json({status: 'fail', message: 'invalid blog'});
        }
        return res.json(blog);
    }catch (e) {
        return res.status(400).json({status: 'fail', message: 'something went wrong. please try again later'})
    }
});

module.exports = router;
