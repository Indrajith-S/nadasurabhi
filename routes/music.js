const path= require('path');

const express= require('express');

const musiccontroller= require('../controllers/music');

const router= express.Router();

router.get('/', musiccontroller.getindex); // getting homepage
router.get('/concerts',musiccontroller.getconcert); // getting concert page
router.get('/articles',musiccontroller.getarticles); // getting articles page
router.get('/contact-us',musiccontroller.getcontact); // getting conctact us page
router.get('/donate',musiccontroller.getdonate); // getting donate page

module.exports= router;