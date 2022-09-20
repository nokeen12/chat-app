import "../css/Chatpage.css"
import { Sidebar, Chat } from '../components'
// import { useContext } from "react";
// import { AuthContext } from '../context/auth.context';

export default function Chatpage(){
    // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <div className="chatpage">
            <Sidebar />
            <Chat />
        </div>
    )
}