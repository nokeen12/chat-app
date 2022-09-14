import "../css/Chatpage.css"
import { Navbar } from '../pages'
export default function Chatpage(){
    return(
        <div className="chatpage">
            <Navbar />
            <div className="chatroom">
                <div className="chatlog">
                    <p className="message a">hey!~</p>
                    <p className="message a">helllllooooooooooooooooo</p>
                    <p className="message b">how r you doing today</p>
                    <p className="message a">i'm doing gucci my boi</p>
                    <p className="message b">oh ok.</p>
                </div>
                <form className="chatbox">
                    <input className="chattype" type='text' name='message' placeholder='Message...'/>
                    <input type="button" value="Send" className="send"/>
                </form>
            </div>
        </div>
    )
} 