const path= require('path');

const express= require('express');

const homeaftersigncontroller= require('../controllers/homeaftersign');

const router= express.Router();

router.get('/home', homeaftersigncontroller.gethome); // getting homepage
router.get('/signout',homeaftersigncontroller.getsignout); // getting signout page
router.get('/outconcerts',homeaftersigncontroller.getoutconcert); // getting concert page
router.get('/outarticles',homeaftersigncontroller.getoutarticles); // getting articles page
router.get('/outcontact-us',homeaftersigncontroller.getoutcontact); // getting conctact us page
router.get('/outdonate',homeaftersigncontroller.getoutdonate); // getting donate page

module.exports= router;