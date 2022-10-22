import { Router } from "express";
import {getUser} from '../controllers/UserMaster.controller';
const router = Router()

router.get('/getuser',getUser)
// router.post('/newuser',getUser)


export default router