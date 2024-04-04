import express from 'express'
import { signup, login, logout} from '../controllers/auth.js'



const router = express.Router()

router.get('/login', login )


router.get('/signup', signup)

router.get('/logout', logout)


export default router;