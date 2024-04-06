import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';


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

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,

            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();
        if (newUser){
            // generate JWT token
             generateTokenAndSetCookie(newUser._id, res)
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                password: newUser.password,
               
    
                profilePicture : newUser.profilePicture
            });

        }else{
            res.status(400).json({error: "Invalid user data"})
        }

        
    } catch (error) {
        console.log('Error in Signup controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const login = async(req,res)=>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || '')

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:'Invalid username or password'})
        }
        generateTokenAndSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            // password: user.password,
           

            profilePicture : user.profilePicture

        })

    }catch(error){
        console.log('Error in Login controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });

    }

    
}

export const getLogin= (req,res)=>{
    res.send('hey')
}


export const logout= (req,res)=>{
    try{
        res.cookie('jwt', "", {maxAge:0})
        res.status(200).json({message: "Logged out successfully"})

    }catch(error){
        console.log('Error in Logout controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });

    }

 
}

export const getSignup= (req,res)=>{
    res.send('hey')
}
export const getLogout= (req,res)=>{
    res.send('hey')
}
