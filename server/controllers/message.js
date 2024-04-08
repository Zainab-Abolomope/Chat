import Conversation from '../models/conversationModel.js'
import Message from '../models/messageModel.js'
// import User from '../models/userModel.js'




export const sendMessage = async (req, res)=>{

    try{
        const {message} = req.body
        const {id:receiverId} = req.params
        const senderId = req.user._id


       let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
            

        })

    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId, receiverId],

        })

        const newMessage = new Message({
            senderId:senderId,
            receiverId: receiverId,
            message:message
        })
        

        if(newMessage){
            conversation.messages.push(newMessage._id);
            
        }
       
        // This will run in parallel, this will faster
        await Promise.all([conversation.save(), newMessage.save()])

        // SOCKET IO functionality will go here
        // await conversation.save()
        // await newMessage.save()
        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            conversationId: conversation._id,
            newMessage: newMessage
        })
        
    
    }




    }catch(error) {
        console.log('Error in Message controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });

    }
    // console.log('messge sent', req.params.id)
}

export const getSendMessage = async (req, res)=>{
    try{

        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate('messages');
        

        IF(!conversation) 
        return res.status(200).json([])

        const messages= conversation.messages
        res.status(200).json(messages)
        

    }catch(error){
        console.log('Error in Message controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });

    }
}


