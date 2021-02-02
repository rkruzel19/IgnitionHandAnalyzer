import "../style/Welcome.css"

function Welcome() {
    

    return (
        <div className="front_page">
            <label>Ignition Hand Analyzer</label>
            <div className="login_area">
                <div className="username">
                    <label>Username:</label>
                    <input/>
                </div>
                <div className="password">
                    <label>Password:</label>
                    <input/>
                </div>
                <button>Login</button>
            </div>
            <div className="create_account">
                <button>Create Account</button>
            </div>
        </div>
    )

}

export default Welcome