import {useState} from "react"
import MockTournamentComp from "./MockTournamentComp"

function UserAccount(props) {

    const [userName, setUserName] = useState("rkruzel19")
    const [password, setPassword] = useState("Hockey19")
    const [firstName, setFirstName] = useState("Rob")
    const [lastName, setLastName] = useState("Kruzel")
    const [email, setEmail] = useState("rkruzel576@gmail.com")
    const [tournaments, setTournaments] = useState(<MockTournamentComp/>) 

    return (
        <div>
            <h3>userName: {userName}</h3>
            <h3>password: {password}</h3>
            <h3>firstName: {firstName}</h3>
            <h3>lastName: {lastName}</h3>
            <h3>email: {email}</h3>
            <div>{tournaments}</div>
        </div>
    )
}

export default UserAccount