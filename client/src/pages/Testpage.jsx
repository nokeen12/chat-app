import axios from 'axios'
import { AuthContext } from '../context/auth.context';
import { useState, useContext } from "react";
// import { WebSocketServer } from 'ws';


const API_URL = process.env.REACT_APP_API_URL;

export default function Testpage(){
    const { user } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(undefined);


    const getFriends = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}/user/friends/${user._id}`)
        .then(response => {
            console.log(response.data.friendsList)
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        })
    }
    return(
        <div>
            testpage
            <button onClick={getFriends}>Test getfriends</button>
            { errorMessage && <p className="error-message">{errorMessage}</p> }
        </div>
    )
}