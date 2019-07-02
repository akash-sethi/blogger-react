const {User} = require('./models/user.model');
const {Blog} = require('./models/blog.model');
const bcrypt = require("bcrypt");

const bootstrap =() => {
    User.countDocuments({}, (err, count) => {
        if(!count){
            var users = [];
            users.push(new User({email: 'user2@gmail.com', name: 'Test User2', hash: 'test1234'}))
            users.push(new User({email: 'user1@gmail.com', name: 'Test User1', hash: 'test1234'}))
            users.forEach(user => {
                bcrypt.hash(user.hash, 10, (err, hash) => {
                    user.hash = hash;
                    user.save((err, res) => {
                        console.log('user saved');
                    })
                })
            });
        } else {
            console.log('num of user: ', count)
        }
        createBlog();
    });
};


const createBlog = () => {
    Blog.countDocuments({}, (err, count) => {
        if(!count){
            blogs.forEach((blog, index) => {
                new Blog({...blog}).save((err, doc) => {
                    if(err) {
                        console.log(`unable to save doc: ${JSON.stringify(blog)}, error = ${err}`)
                    } else {
                        console.log('saved blog with index = ', index)
                    }
                });
            })
        } else {
            console.log('num of blogs: ', count)
        }
    });
};

module.exports = bootstrap;


var blogs = [
    {
        title: "Let’s build a full stack MongoDB, React, Node and Express (MERN) app",
        description: `<p>When I wanted to upgrade from being a Front End Developer to a Full Stack Developer, I had trouble finding an article that encompassed the concepts of all the different skills I needed to learn in able to become one.</p><p>Knowledge of databases, familiarity with a back-end language and how to integrate the back-end with my front-end app were skills that I didn’t know yet. That is what pushed me to create this article: to solve that in order to help myself and for my fellow software engineers out there.</p><p>I’ve included the git repository link of the whole code at the end of the article but I suggest that you take this article step-by-step before checking the repo out. It will help you understand the tutorial better. :)</p><p>When I wanted to upgrade from being a Front End Developer to a Full Stack Developer, I had trouble finding an article that encompassed the concepts of all the different skills I needed to learn in able to become one.</p><p>Knowledge of databases, familiarity with a back-end language and how to integrate the back-end with my front-end app were skills that I didn’t know yet. That is what pushed me to create this article: to solve that in order to help myself and for my fellow software engineers out there.</p><p>I’ve included the git repository link of the whole code at the end of the article but I suggest that you take this article step-by-step before checking the repo out. It will help you understand the tutorial better. :)</p>`,
        author: "ueser1@gmail.com",
        comments: [
            {"comment": "Nice article, Keep it up", "user": "user2@gmail.com"},
            {"comment": "this is just awesome", "user": "hacker@gmail.com"},
            {"comment": "worse than worst", "user": "akash@gmail.com"}
        ],
        dateCreated: Date.now()
    },
    {
        title: "Let’s build a full stack MongoDB, React, Node and Angular (MEAN) app",
        description: `<p>When I wanted to upgrade from being a Front End Developer to a Full Stack Developer, I had trouble finding an article that encompassed the concepts of all the different skills I needed to learn in able to become one.</p><p>Knowledge of databases, familiarity with a back-end language and how to integrate the back-end with my front-end app were skills that I didn’t know yet. That is what pushed me to create this article: to solve that in order to help myself and for my fellow software engineers out there.</p><p>I’ve included the git repository link of the whole code at the end of the article but I suggest that you take this article step-by-step before checking the repo out. It will help you understand the tutorial better. :)</p><p>When I wanted to upgrade from being a Front End Developer to a Full Stack Developer, I had trouble finding an article that encompassed the concepts of all the different skills I needed to learn in able to become one.</p><p>Knowledge of databases, familiarity with a back-end language and how to integrate the back-end with my front-end app were skills that I didn’t know yet. That is what pushed me to create this article: to solve that in order to help myself and for my fellow software engineers out there.</p><p>I’ve included the git repository link of the whole code at the end of the article but I suggest that you take this article step-by-step before checking the repo out. It will help you understand the tutorial better. :)</p>`,
        author: "user2@gmail.com",
        comments: [
            {"comment": "Nice article, Keep it up", "user": "user1@gmail.com"},
            {"comment": "this is just awesome", "user": "hacker@gmail.com"},
            {"comment": "worse than worst", "user": "akash@gmail.com"}
        ],
        dateCreated: Date.now()
    }
]