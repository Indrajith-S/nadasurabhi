const User= require('../models/user');
const path = require('path');

exports.gethome= ('/home',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','homeaftersign.html'));
});

exports.getsignout= ('/signout', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','signout.html'));
});

exports.getoutconcert= ('/outconcerts', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','signout','outconcerts.html'));
});

exports.getoutarticles= ('/outarticles', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','signout','outarticles.html'));
});

exports.getoutcontact= ('/outcontact-us', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','signout','outcontact-us.html'));
});

exports.getoutdonate= ('/outdonate', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','signout','outdonate.html'));
});
