const {signIn,signUp,updateAP} = require('../controllers/UserMaster.controller')

const express = require('express');
const router = express.Router();

router.get('/signIn',signIn)
router.post('/signUp',signUp)
router.post('/ap',updateAP)
module.exports=router;