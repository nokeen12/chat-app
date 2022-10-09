import "../css/Chatpage.css"
import { Sidebar, Chat } from '../components'
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from "axios";

const API_URL = 'http://localhost:5005';

export default function Chatpage(){
    const { user } = useContext(AuthContext);
    const [ chat, setChat ] = useState("");


    const socket = new WebSocket('ws://localhost:4000');

    socket.addEventListener('open', () => {
        console.log('Connected to WS Server')
    });
    socket.addEventListener('message', (e) => {
        console.log('Message from server ', e.data);
    })
    function sendMessage(){
        socket.send('Hello From Client1! -socket');
    }
    const loadChat = (e) => {
        e.preventDefault();
        const requestBody = { friend: e.target.innerHTML, current: user._id}
        axios.post(`${API_URL}/user/chat`, requestBody)
        .then(response => {
            setChat(response.data.chat)
        })
    }
    return(
        <div className="chatpage">
            <Sidebar loadChat={loadChat}/>
            <Chat chat={chat} sendMessage={sendMessage}/>
        </div>
    )
}