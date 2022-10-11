import '../css/Chat.css'
// import { useContext } from "react";
// import { AuthContext } from '../context/auth.context';
import { useState } from "react";

export default function Chat({chat, sendMessage}){
    //submitting form should send axios post to update chat
    const [ message, setMessage ] = useState({
        chat_log: '',
        message: '',
        user_id: ''
    });
    //should load each message with className message a/b depending on userId
    function handleChange(e){
        setMessage((oldMessage) => {
            return { ...oldMessage, 'message': e.target.value }
        })
    };
    function handleSubmit(e){
        e.preventDefault();
        sendMessage(message)
        setMessage((oldMessage) => {
            return { ...oldMessage, 'message': '' }
        })
    };

    return(
        <div className="chatroom">
            <div className="chatlog">
                {/* <p className="message a">hey!~</p>
                <p className="message a">helllllooooooooooooooooo</p>
                <p className="message b">how r you doing today</p>
                <p className="message a">i'm doing gucci my boi</p>
                <p className="message b">oh ok.</p> */}
            </div>
            <form className="chatbox" onSubmit={handleSubmit}>
                <input className="chattype" type='text' name='message' placeholder='Message...' value={message.message} onChange={handleChange}/>
            </form>
        </div>
    )
}