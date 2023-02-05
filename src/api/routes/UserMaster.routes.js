const {getUser,newUser} = require('../controllers/UserMaster.controller')

const express = require('express');
const router = express.Router();

router.get('/getuser',getUser)
router.post('/newuser',newUser)

module.exports=router;