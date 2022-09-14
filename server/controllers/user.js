const User = require("../models/User.model");

const getFriends = (req, res) => {

}
const sendFriendRequest = (req, res) => {
    const { username } = req.body;
}
const acceptFriendRequest = (req, res) => {
    const { username } = req.body;

}
module.exports = {
    getFriends,
    sendFriendRequest,
    acceptFriendRequest
}