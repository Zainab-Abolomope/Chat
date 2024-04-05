import express from 'express'
import { signup, login, logout, getSignup} from '../controllers/auth.js'



const router = express.Router()

router.post('/login', login )


router.post('/signup', signup)
router.get('/signup', getSignup)

router.post('/logout', logout)


export default router;