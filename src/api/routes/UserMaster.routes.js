const {getUser,newUser,reviewnewUser} = require('../controllers/UserMaster.controller')

const express = require('express');
const router =express.Router();

router.get('/getuser',getUser)
router.post('/newuser',newUser)
router.post('/reviewnewuser',reviewnewUser)

module.exports=router;