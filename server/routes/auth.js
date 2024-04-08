import express from 'express'
import { signup, login, logout, getSignup, getLogin, getLogout} from '../controllers/auth.js'




const router = express.Router()

router.post('/login', login )


router.post('/signup', signup)
router.get('/signup', getSignup)
router.get('/login', getLogin)
router.get('/logout', getLogout)

router.post('/logout', logout)


export default router;