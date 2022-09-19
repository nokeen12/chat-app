const User = require("../models/User.model");

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
    const username = req.params.id//grabs username of user selected
    //need to also send user's id in req
    User.findOne(username) //we will get their id to find the matching chat
    .then(user => {

    })
    res.status(201).json({username});
}

module.exports = {
    getFriends,
    sendFriendRequest,
    acceptFriendRequest,
    getUsers,
    getChat
}