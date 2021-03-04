import "../style/Login.css"

function Login(){


    return (
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
    )

}

export default Login