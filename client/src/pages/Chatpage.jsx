import "../css/Chatpage.css"
import { Sidebar, Chat } from '../components'
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from "axios";

const API_URL = 'http://localhost:5005';

export default function Chatpage(){
    const { user } = useContext(AuthContext);
    const [ chat, setChat ] = useState("");

    const loadChat = (e) => {
        e.preventDefault();
        const requestBody = { friend: e.target.innerHTML, current: user._id}
        axios.post(`${API_URL}/user/getchat`, requestBody)
        .then(response => {
            setChat(response.data.chat)
        })
    }
    return(
        <div className="chatpage">
            <Sidebar loadChat={loadChat} />
            <Chat chat={chat}/>
        </div>
    )
}