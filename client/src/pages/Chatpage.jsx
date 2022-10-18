import "../css/Chatpage.css"
import { Sidebar, Chat } from '../components'
import { useState } from 'react';
// import { AuthContext } from '../context/auth.context';
// import axios from "axios";

// const API_URL = 'http://localhost:5005';

export default function Chatpage(){
    // const { user } = useContext(AuthContext);
    const [ chat, setChat ] = useState([]);//will be used to store chat messages in dm's/groupchats, not in global
    const [ newMessage, setNewMessage ] = useState('')//use to store and send messages to db

    const socket = new WebSocket('ws://localhost:4000');

    socket.addEventListener('open', () => {
        console.log('Connected to WS Server')
    });
    socket.addEventListener('message', (e) => {
        showMessage(e.data, false) //adds messages from other users to screen
        setNewMessage(e.data)
    })
    function sendMessage(e){
        socket.send(e.message);
        // setChat(Array(chat).push(e))
    }
    function showMessage(text, isMine = false){
        document.getElementById("chatlog").innerHTML += `
            <p class="message ${isMine?'b':'a'}">
                ${text}
            </p>
        `
    }
    // const loadChat = (e) => {
    //     e.preventDefault();
    //     const requestBody = { friend: e.target.innerHTML, current: user._id}
    //     axios.post(`${API_URL}/user/chat`, requestBody)
    //     .then(response => {
    //         setChat(response.data.chat)
    //     })
    // }
    return(
        <div className="chatpage">
            <Sidebar /*loadChat={loadChat}*/ />
            <Chat chat={chat} sendMessage={sendMessage} showMessage={showMessage} />
        </div>
    )
}