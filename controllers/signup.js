const User= require('../models/user');
const path= require('path');

exports.getusersignup = ('/signup', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','signup.html'));
});

exports.postentersignup = (req,res,next) =>{
    const username= req.body.name;
    const password= req.body.pass;
    const user= new User(username,password);
    user.save();
    console.log(req.body);
    res.redirect('/login');
};

