import { Router } from "express";
import {getUser,newUser,reviewnewUser} from '../controllers/UserMaster.controller';



const router = Router()

router.get('/getuser',getUser)
router.post('/newuser',newUser)
router.post('/reviewnewuser',reviewnewUser)

export default router