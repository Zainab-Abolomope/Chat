import express from 'express'
import { sendMessage , getSendMessage} from '../controllers/message.js'
import protectRoute from '../middleware/protectRoutes.js'


const router = express.Router()



router.post('/send/:id', protectRoute, sendMessage)
router.get('/:id',  getSendMessage)


export default router;