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
    const { friend, current } = req.body

    User.findOne({_id: current})
    .then(user => {
        console.log(user)
    })
    User.findOne({username: friend})
    .then(user => {
        console.log(user)
    })
    res.status(201).json({current});
}

module.exports = {
    getFriends,
    sendFriendRequest,
    acceptFriendRequest,
    getUsers,
    getChat
}