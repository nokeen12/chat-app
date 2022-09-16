import { useState } from "react";
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
                console.log(`${API_URL}/auth/userSignup`)
                navigate('/');
            })
            .catch((error) => console.log(error));
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
                    <label>*Username:</label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsername}
                    />
                    <label>*Email:</label>
                    <input 
                        type="email"
                        name="email"
                        value={email_address}
                        onChange={handleEmail}
                    />
                    <label>*Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <label>*Reenter Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={reenteredPassword}
                        onChange={handleReenteredPassword}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}