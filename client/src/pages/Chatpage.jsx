import "../css/Chatpage.css"
import { Sidebar, Chat } from '../components'

export default function Chatpage(){
    return(
        <div className="chatpage">
            <Sidebar />
            <Chat />
        </div>
    )
}