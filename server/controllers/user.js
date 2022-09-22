const User = require("../models/User.model");
const ChatLog = require("../models/ChatLog.model");

const getFriends = (req, res) => {
}

const sendFriendRequest = (req, res) => {
    const { username } = req.body;
}

const acceptFriendRequest = (req, res) => {
    const { username } = req.body;
}

const getUsers = (req, res) => {
    User.find()
    .then(users => {
        const userList = users.map(user => user.username)
        res.status(201).json({userList});
    }).catch(err => res.status(500).json({ message: "Internal Server Error" }))
}

const getChat = (req, res) => {
    const { friend, current } = req.body
    try {
        User.findOne({_id: current})
        .then(user1 => {
            User.findOne({username: friend})
            .then(user2 => {
                const idSet = [user1.id, user2.id]
                ChatLog.findOne({user_ids: idSet})
                    .then(chatLog => {
                        if(chatLog){
                            const { message } = chatLog;
                            const chat = { message };
                            res.status(201).json({ chat: chat });
                        }
                        if(!chatLog){
                            return ChatLog.create({user_ids: idSet})
                        }
                    }).then(createdChat => {
                        if(createdChat){
                            const { message } = createdChat;
                            const chat = { message };
                            res.status(201).json({ chat: chat });
                        }
                    })
            })
        })
    }
    catch (error){
        console.log(error);
        res.status(500).json({message: error});
    }
}

module.exports = {
    getFriends,
    sendFriendRequest,
    acceptFriendRequest,
    getUsers,
    getChat
}