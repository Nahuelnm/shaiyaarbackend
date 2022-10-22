import { Router } from "express";
import {getUser,newUser} from '../controllers/UserMaster.controller';



const router = Router()

router.get('/getuser',getUser)
router.post('/newuser',newUser)


export default router