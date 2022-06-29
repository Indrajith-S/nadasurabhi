const User= require('../models/user');
const path = require('path');

exports.getuser = ('/login',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','login.html'));
});

exports.postenteruser = (req,res,next) =>{
    const username= req.body.name;
    const password= req.body.pass;
    const user= new User(username,password);
    const login = user.checkLogin();
    console.log(req.body);
    login && res.redirect('/home');
};
