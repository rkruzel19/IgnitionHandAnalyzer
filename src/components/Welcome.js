import "../style/Welcome.css"
import Login from "./Login"

function Welcome() {
    

    return (
        <div className="front_page">
            <label>Ignition Hand Analyzer</label>
            <Login/>
            <div className="create_account">
                <button className="create_account_btn">Create Account</button>
            </div>
        </div>
    )

}

export default Welcome