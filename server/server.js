import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.js'
dotenv.config()

const app = express()

app.get('/', (req, res)=>{
    // root route
    res.send('Hello World')
})

app.use('/api/auth', authRoutes);


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