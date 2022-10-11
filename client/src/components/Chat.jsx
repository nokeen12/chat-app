import '../css/Chat.css'
import { AuthContext } from '../context/auth.context';
import { useState, useContext } from "react";

export default function Chat({chat, sendMessage, showMessage}){
    const { user } = useContext(AuthContext);
    const [ message, setMessage ] = useState({
        message: '',
        user_id: user._id
    });

    function handleChange(e){
        setMessage((oldMessage) => {
            return { ...oldMessage, 'message': e.target.value }
        })
    };
    
    function handleSubmit(e){
        e.preventDefault();
        sendMessage(message)
        showMessage(message.message, true)
        setMessage((oldMessage) => {
            return { ...oldMessage, 'message': '' }
        })
    };

    return(
        <div className="chatroom">
            <div id="chatlog"></div>
            <form className="chatbox" onSubmit={handleSubmit}>
                <input className="chattype" type='text' name='message' placeholder='Message...' value={message.message} onChange={handleChange}/>
            </form>
        </div>
    )
}