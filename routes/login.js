const path= require('path');

const express= require('express');

const logincontroller= require('../controllers/login');

const router= express.Router();

// login/user => GET
router.get('/login', logincontroller.getuser); //getting login page

// login/user => POST
router.post('/login', logincontroller.postenteruser); //posting user login details

module.exports= router;

