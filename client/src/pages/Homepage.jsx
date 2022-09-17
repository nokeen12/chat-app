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
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
    const handleReenteredPassword = (e) => setReenteredPassword(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email_address, username, password, reenteredPassword };
        axios.post(`${API_URL}/auth/userSignup`, requestBody)
            .then(response => {
                navigate('/');
            })
            .catch((error) => console.log(error));
    }
    const checkUsers = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}/user/getusers`)
        .then(response => {
            console.log(response.data.userList)
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="homepage">
            <div className="popup">
                <a href="/">chat</a>
                <h1 className="title">Dre's Simple Chat</h1>
                <p className="description">Sign up or log in to get started chatting.</p>
                {/* <div className="accountbox">
                    <button className="signup-btn">Sign Up</button>
                    <button>Log In</button>
                </div> */}
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
                </form>
                <button onClick={checkUsers}>Check Users</button>
            </div>
        </div>
    )
}