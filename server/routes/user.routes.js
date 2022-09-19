const express = require("express");
const user = require('../controllers/user.js');
const router = express.Router();

router.post('/getfriends', user.getFriends);
router.get('/getusers', user.getUsers);
router.get('/getchat/:id', user.getChat);

module.exports = router;