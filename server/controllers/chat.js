const User = require("../models/User.model");
const ChatLog = require("../models/ChatLog.model");
const Message = require("../models/Message.model");

const sendMessage = (req, res) => {
    const { chat_log, message, user_id } = req.body;

    const newMessage = Message.create({chat_log: chat_log, message: message, user_id: user_id})
    ChatLog.findById(chat_log)
    .then(chatLog => chatLog.chat_log.push(newMessage._id).save())
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
    sendMessage,
    editMessage,
    deleteMessage
}