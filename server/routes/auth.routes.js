const express = require("express");
const auth = require('../controllers/auth.js');
const router = express.Router();
const { isAuthenticated } = require('../middleware/jwt.middleware.js');

router.post('/userSignup', auth.userSignup);
router.post('/userLogin', auth.userLogin);

router.get('/verify', isAuthenticated, (req,res)=>{
    res.status(200).json(req.payload);
    console.log("User Logged In")
})

module.exports = router;