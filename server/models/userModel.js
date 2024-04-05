import mongoose from 'mongoose'
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        
        minLength: 6
    },
   

    gender:{
        type: String,
        required: true,
        enum: ['male', 'female']
    },

    profilePicture:{
        type: String,
        default: ""
    },
   
    date:{
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User", userSchema)

export default User