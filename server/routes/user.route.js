const { User, validateUser } = require('../models/user.model');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const auth = require('../middleware/auth');

router.get('/current', auth, async (req, res) => {
   const user = await User.findOne({email: req.user.email}).select('-_id -hash');
   return res.status(200).json(user)
});

router.post('/save', async (req, res) => {
    const { error } = validateUser(req.body);

    if(error){
        return res.status(400).json({status: 'fail', message: error.details[0].message})
    }

    let user = await User.findOne({email: req.body.email});
    if(user) {
        return res.status(400).json({status: 'fail', message: `user with email ${req.body.email} already exist`});
    }
    const {email, name, hash} = req.body;
    user = new User({
        email: email,
        name: name,
        hash: hash
    });

    user.hash = await bcrypt.hash(user.hash, 10);
    await user.save();

    const token = user.generateToken();
    res.header("x-auth-token", token).json({
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('sdvjbds', email)
    if(!email || !password){
        return res.status(400).json({status: 'fail', message: 'please pass email and password'});
    }
    let user = await User.findOne({email: email}).select('email -_id isAdmin name hash');
    if(!user){
        return res.status(404).json({status: 'fail', message: `user with ${email} does not exist!`});
    }
    bcrypt.compare(password, user.hash, (err, res1) => {
        if(res1){
            const token = user.generateToken();
            res.status(200).header("x-auth-token", token).json({
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            });
        }else {
            return res.status(404).json({status: 'fail', message: `please enter a valid password!`});
        }
    });
});

module.exports = router;

