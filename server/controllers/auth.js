const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/User.model");

const saltRounds = 10;

const userSignup = (req, res) => {
    try {
        const { forename, surname, email_address, age, password, reenteredPassword } = req.body;
        if(forename === '' || surname === '' || email_address === '' || age === '' || password === '' || reenteredPassword === ''){
            res.status(400).json({message:"Fill out all fields"});
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email_address)) {
            res.status(400).json({ message: 'Provide a valid email address.' });
            return;
        }
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!passwordRegex.test(password)) {
            res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
            return;
        } 
        if (password !== reenteredPassword) {
            res.status(400).json({ message: 'Passwords must match.' });
            return;
        } 
        User.findOne({ email_address })
        .then((foundUser) => {
            if (foundUser) {
                res.status(400).json({ message: "Email address in use." });
                return;
            }
            if(!foundUser) {
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(password, salt);
                return Doctor.create({ dr_forename, dr_surname, title, specialty, hospital, years_expirience, phone_number, email_address, password: hashedPassword });
            }
        }).then(createdUser =>{
            if(createdUser){
                const { forename, surname, email_address, age } = createdUser;
                const user = { forename, surname, email_address, age };
                res.status(201).json({ user: user });
            }
        })
    }
     catch (error){
        console.log(error);
        res.status(500).json({ message: error });
    }
}

const userLogin = (req, res) => {
    const { email_address, password } = req.body;

    if (email_address === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User.findOne({ email_address })
    .then((foundUser) => {  
        if (!foundUser) {
            res.status(401).json({ message: "User not found." })
            return;
        }
        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
    
        if (passwordCorrect) {
            const { _id, forename, surname, email_address, age } = foundUser;
            const payload = { _id, forename, surname, email_address, age };
            const authToken = jwt.sign( 
            payload,
            process.env.TOKEN_SECRET,
            { algorithm: 'HS256', expiresIn: "6h" }
            );
            res.status(200).json({ authToken: authToken });
        }
        else {
            res.status(401).json({ message: "Unable to authenticate the user" });
        }
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
}

module.exports = {
    userLogin,
    userSignup,
}