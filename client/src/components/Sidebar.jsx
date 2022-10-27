import "../css/Sidebar.css";
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../context/auth.context';

const API_URL = 'http://localhost:5005';

export default function Sidebar({loadChat}){
    const [ isOpen, setIsOpen ] = useState(false)//will be used to open and close sidebar

    const toggleState = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen)
        if(!isOpen){
            document.getElementById("nav").style.animation = 'stretchRight 1000ms forwards'
            document.getElementById("sidebar").style.animation = 'slideUp 1000ms forwards'
        }else{
            document.getElementById("nav").style.animation = 'stretchLeft 1000ms backwards'
            document.getElementById("sidebar").style.animation = 'slideDown 1000ms backwards'
        }
    }
    return(
        <nav id="nav">
            <div id="sidebar">
                <a href="/l">home</a>
                <SearchList loadChat={loadChat}/>
            </div>
            {isOpen &&
                <div id="settingsPage">
                    <h1>Theme</h1>
                    <br/> 
                    <p>Background Color:</p>
                    <p>Message Color:</p>
                    <h1>Account</h1>
                    <p>Change Username:</p>
                    <p>Change Email:</p>
                    <p>Change Password:</p>
                    <button>Save</button>
                </div>
                }
            <div id="settings" onClick={toggleState}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </nav>
    )
}

function SearchList({loadChat}) {
    const [ userList, setUserList ] = useState([]);
    const [ searchInput, setSearchInput ] = useState("");
    const { logOutUser } = useContext(AuthContext);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
        
    useEffect(()=>{
        axios.get(`${API_URL}/user/users`)
        .then(response => {
            setUserList(response.data.userList)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div id="side">
            <button onClick={logOutUser}>Log Out</button>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <ul>
                {searchInput.length > 0 &&
                    userList.map((user, index) => {
                        if(user.includes(searchInput)){
                            return <li key={index} onClick={loadChat}>{user}</li>
                        }
                    })
                }
            </ul>
        </div>
    )
}