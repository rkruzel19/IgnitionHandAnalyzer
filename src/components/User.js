import {useState} from "react"
import MockTournamentComp from "./MockTournamentComp"

function User(props) {

    const [userName, setUserName] = useState(props.info.userName)
    const [password, setPassword] = useState(props.info.password)
    const [firstName, setFirstName] = useState(props.info.firstName)
    const [lastName, setLastName] = useState(props.info.lastName)
    const [email, setEmail] = useState(props.info.email)
    const [tournaments, setTournaments] = useState(props.info.tournaments) 

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

export default User