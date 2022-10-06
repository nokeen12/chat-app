import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/Homepage.css';
import { AuthContext } from '../context/auth.context';

const API_URL = 'http://localhost:5005';

export default function Homepage(){
    const [user, setUser] = useState({
        email_address: "",
        username: "",
        password: "",
        reenteredPassword: "",
    });
    const [visA, setVisA] = useState(false);
    const [visB, setVisB] = useState(false);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);

    //fills in 'user' object with text fields
    const handleChange = (e) => {
        setUser((oldUser) => {
          return { ...oldUser, [e.target.name]: e.target.value };
        });
    };

    //toggling menu visibility
    const swapStateA = (e) => setVisA(!visA);
    const swapStateB = (e) => setVisB(!visB);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/auth/userSignup`, user)
            .then(() => {
                swapStateA(!visA)
                swapStateB(!visB)
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/auth/userLogin`, user)
            .then(response => {
                storeToken(response.data.authToken)
                authenticateUser();
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
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
                            value={user.username}
                            onChange={handleChange}
                        />
                        <input 
                            type="email"
                            name="email_address"
                            placeholder="Email"
                            value={user.email_address}
                            onChange={handleChange}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <input 
                            type="password"
                            name="reenteredPassword"
                            placeholder="Reenter Password"
                            value={user.reenteredPassword}
                            onChange={handleChange}
                        />
                        <button type="submit">Sign Up</button>
                        <button onClick={swapStateA}>Go Back</button>
                    </form>
                }
                {visB &&
                    <form onSubmit={handleLoginSubmit}>
                        <label>Log In</label>
                        <input 
                            type="email"
                            name="email_address"
                            placeholder="Email"
                            value={user.email_address}
                            onChange={handleChange}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Log In</button>
                        <button onClick={swapStateB}>Go Back</button>
                    </form>
                }
                { errorMessage && <p className="error-message">{errorMessage}</p> }
            </div>
        </div>
    )
}