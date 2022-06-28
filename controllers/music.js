const User= require('../models/user');
const path = require('path');

exports.getindex= ('/',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','music.html'));
});

exports.getconcert= ('/concerts', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','concerts.html'));
});

exports.getarticles= ('/articles', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','articles.html'));
});

exports.getcontact= ('/contact-us', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
});

exports.getdonate= ('/donate', (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','donate.html'));
});
