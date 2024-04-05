import User from '../models/userModel.js'
import bcrypt from 'bcrypt'


export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password,

            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            password: newUser.password,
           

            profilePicture : newUser.profilePicture
        });
    } catch (error) {
        console.log('Error in Signup controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const login = (req,res)=>{
    res.send('login')
}


export const logout= (req,res)=>{
    res.send('login')
}

export const getSignup= (req,res)=>{
    res.send('hey')
}

