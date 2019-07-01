const { Blog, validateBlog } = require('../models/blog.model');
const { User } = require('../models/user.model');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mongoose = require('mongoose');

//list blogs
router.get('/', async (req, res) => {
   let blogs = await Blog.find({}).select('title description author dateCreated');
   res.status(200).json(blogs);
});


//blog detail
router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(mongoose.Types.ObjectId(_id)).select('title description author comments dateCreated');
    } catch (e) {
     return res.status(400).json({status: 'fail', message: `${e.message}`})
    }
    res.status(200).json(blog);
});

//save blog
router.post('/', auth, async (req, res) => {
    const user = await User.findOne({email: req.user.email}).select('-_id email');
    if(!user) {
        res.status(500).json({status: 'fail', message: 'something went wrong, please try again'})
    }
    let data = req.body;
    data.author = user.email;
    const {error} = validateBlog(data);
    if(error){
        return res.status(400).json({status: 'fail', message: error.details[0].message})
    }

    let blog = new Blog(data);
    blog.dateCreated = Date.now();
    try {
        await blog.save();
    }catch (e) {
        return res.status(200).json({status: 'fail', message: e.message})
    }
    res.status(200).json({status: 'ok', message: 'saved successfully'});
});

module.exports = router;



