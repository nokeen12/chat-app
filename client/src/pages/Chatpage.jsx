import "../css/Chatpage.css"
import { Navbar } from '../pages'
export default function Chatpage(){
    return(
        <div className="chatpage">
            <Navbar />
            <div className="chatroom">
                <div className="chatlog"></div>
                <form className="chatbox">
                    <input className="chattype" type='text' name='message' placeholder='Message...'/>
                    <input type="button" value="Send" className="send"/>
                </form>
            </div>
        </div>
    )
} 