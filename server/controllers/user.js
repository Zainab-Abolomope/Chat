import User from "../models/userModel.js"

export const getUsersForSidebar = async(req,res)=>{



    try{

        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select('-password')
        // this means guve me every user in the database but not the current authenticated user

        res.status(200).json(filteredUsers)

    }catch(error){
        console.log("error in getusersidebar: ", error.message )
    res.status(500).json({error: "Internal server error"})

}
}