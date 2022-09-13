const express = require("express");
const auth = require('../controllers/auth.js');
const router = express.Router();
const { isAuthenticated } = require('../middleware/jwt.middleware.js');

router.post('/patientSignup', auth.userSignup);
router.post('/patientLogin', auth.userLogin);

router.get('/verify', isAuthenticated, (req,res)=>{
    console.log(`req.payload`, req.payload);
    res.status(200).json(req.payload);
})

module.exports = router;