import "../style/NewUser.css"

function NewUser() {


    return (
        <div className="new_user">
            <label>New User Setup</label>
            <div className="username">
                <label>Username:</label>
                <input/>
            </div>
            <div className="password">
                <label>Password:</label>
                <input/>
            </div>
            <div className="first_name">
                <label>First Name:</label>
                <input/>
            </div>
            <div className="last_name">
                <label>Last Name:</label>
                <input/>
            </div>
            <div className="email">
                <label>Email:</label>
                <input/>
            </div>
            <button>Create Account</button>
        </div>
    )

}

export default NewUser