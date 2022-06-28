const path= require('path');

const express= require('express');

const signupcontroller= require('../controllers/signup');

const router= express.Router();

router.get('/signup', signupcontroller.getusersignup); //getting signup page

router.post('/signup', signupcontroller.postentersignup); //posting user signup details

module.exports= router;