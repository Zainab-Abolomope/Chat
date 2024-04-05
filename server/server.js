import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.js'
import mongoose from "mongoose"
import bodyParser from 'body-parser'
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err.message)
})

// app.get('/', (req, res)=>{
//     // root route
//     res.send('Hello World')

// })
app.use(express.json())  
app.use(express.urlencoded({extended: false}))

app.use('/api/auth', authRoutes);
// to parse the incoming requests with JSON payloads(from req.body)


// app.get('/api/auth/signup', (req, res)=>{

//     console.log('signup route')
//     // res.send('Hello World')
// })
// app.get('/api/auth/login', (req, res)=>{

//     console.log('login route')
//     // res.send('Hello World')
// })

// app.get('/api/auth/logout', (req, res)=>{

//     console.log('logout route')
//     // res.send('Hello World')
// })
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})