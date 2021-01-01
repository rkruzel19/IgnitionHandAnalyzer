import {useState} from "react"

function Hand(){

    const [id, setId] = useState(2447299042)
    const [players, setPlayers] = useState([])
    const [winner, setWinner] = useState("")
    const [action, setAction] = useState([])
    const [blinds, setBlinds] = useState([10, 20])
    const [dealer, setDealer] = useState("")
    const [communityCards, setCommunityCards] = useState(["2h", "7s", "5s", "8c", "Kd"])
    const [stage, setStage] = useState("Flop")

    return (
        <div>
            <h1>Hand id: {id}</h1>
            <h1>players: {players}</h1>
            <h1>winner: {winner}</h1>
            <h1>action: {action}</h1>
            <h1>blinds: {blinds}</h1>
            <h1>dealer: {dealer}</h1>
            <h1>communityCards: {communityCards}</h1>
            <h1>stage: {stage}</h1>
        </div>
    )
}

export default Hand