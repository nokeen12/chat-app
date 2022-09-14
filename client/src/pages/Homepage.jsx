import '../css/Homepage.css'
export default function Homepage(){
    return(
        <div className="homepage">
            <div className="popup">
                <a href="/">chat</a>
                <h1 className="title">Dre's Simple Chat</h1>
                <p className="description">Sign up or log in to get started chatting.</p>
                <div className="accountbox">
                    <button className="signup-btn">Sign Up</button>
                    <button>Log In</button>
                </div>
            </div>
        </div>
    )
}