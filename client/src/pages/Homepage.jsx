import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/Homepage.css';

const API_URL = 'http://localhost:5005';

export default function Homepage(){
    const [email_address, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [reenteredPassword, setReenteredPassword] = useState("");
    const [visA, setVisA] = useState(false)
    const [visB, setVisB] = useState(false)
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
    const handleReenteredPassword = (e) => setReenteredPassword(e.target.value);
    const swapStateA = (e) => setVisA(!visA);
    const swapStateB = (e) => setVisB(!visB);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email_address, username, password, reenteredPassword };
        axios.post(`${API_URL}/auth/userSignup`, requestBody)
            .then(response => {
                navigate('/');
            })
            .catch((error) => console.log(error));
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email_address, password };
        axios.post(`${API_URL}/auth/userLogin`, requestBody)
            .then(response => {
                navigate('/l');
            })
            .catch((error) => console.log(error));
    }

    return(
        <div className="homepage">
            <div className="popup">
                <a href="/">chat</a>
                <h1 className="title">Dre's Simple Chat</h1>
                <p className="description">Sign up or log in to get started chatting.</p>

                {!visA && !visB && 
                    <div className="accountbox">
                        <button className="signup-btn" onClick={swapStateA}>Sign Up</button>
                        <button onClick={swapStateB}>Log In</button>
                    </div>
                }
                {visA &&
                    <form onSubmit={handleSignupSubmit}>
                        <label>Create an Account</label>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsername}
                        />
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email_address}
                            onChange={handleEmail}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Reenter Password"
                            value={reenteredPassword}
                            onChange={handleReenteredPassword}
                        />
                        <button type="submit">Sign Up</button>
                        <a href="" onClick={swapStateA}>Go Back</a>
                    </form>
                }
                {visB &&
                    <form onSubmit={handleLoginSubmit}>
                        <label>Log In</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email_address}
                            onChange={handleEmail}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <button type="submit">Log In</button>
                        <a href="" onClick={swapStateB}>Go Back</a>
                    </form>
                }
            </div>
        </div>
    )
}