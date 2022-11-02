const User = require("../models/User.model");
const ChatLog = require("../models/ChatLog.model");
const Message = require("../models/Message.model");

const saveMessage = (req, res) => {//Looks for existing chat by searching for matching chat_log in ChatLog models / chatLog is the found chat 
    const { chat_log, message, user_id } = req.body;
    
    const newMessage = {message: message, sent_by: user_id}
    ChatLog.findById(chat_log)
    .then(chatLog => chatLog.chat_log.push(newMessage).save())
    .catch(err => {
        console.log(err)
        res.status(500).json({message: err})
    })
}

const editMessage = (req, res) => {
    
}

const deleteMessage = (req, res) => {
}

module.exports = {
    saveMessage,
    editMessage,
    deleteMessage
}