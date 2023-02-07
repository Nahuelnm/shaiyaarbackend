const {signIn,signUp,counter} = require('../controllers/UserMaster.controller')

const express = require('express');
const router = express.Router();

router.get('/signIn',signIn)
router.get('/count',counter)
router.post('/signUp',signUp)

module.exports=router;