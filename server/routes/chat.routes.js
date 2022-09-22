const express = require("express");
const chat = require('../controllers/chat.js');
const router = express.Router();

router.post('/sendmessage', chat.sendMessage);
router.get('/editmessage', chat.editMessage);
router.post('/deletemessage', chat.deleteMessage);

module.exports = router;