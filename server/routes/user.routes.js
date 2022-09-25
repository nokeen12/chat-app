const express = require("express");
const user = require('../controllers/user.js');
const router = express.Router();

router.get('/friends/:id', user.getFriends);
router.get('/users', user.getUsers);
router.post('/chat', user.getChat);

module.exports = router;