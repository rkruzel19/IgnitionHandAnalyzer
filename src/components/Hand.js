import {useState} from "react"
import '../style/Hand.css';

function Hand(props){

    const [id, setId] = useState(props.info.id)
    const [players, setPlayers] = useState(props.info.players)
    const [winner, setWinner] = useState(props.info.winner)
    const [action, setAction] = useState(props.info.action)
    const [blinds, setBlinds] = useState(props.info.blinds)
    const [dealer, setDealer] = useState(props.info.dealer)
    const [communityCards, setCommunityCards] = useState(props.info.communityCards)
    const [stage, setStage] = useState(props.info.stage)
    const [startTime, setStartTime] = useState(props.info.startTime)
    const [blindLevel, setBlindLevel] = useState(props.info.blindLevel)

    return (
        <div className="hand">
            <h3>Hand id: {id}</h3>
            <h3>Start time: {startTime}</h3>
            
            {/* <h3>winner: {winner}</h3> */}
            {/* <h3>action: {action}</h3> */}
            <h3>blind level: {blindLevel}</h3>
            <h3>players: {players}</h3>
            {/* <h3>blinds: {blinds}</h3> */}
            {/* <h3>dealer: {dealer}</h3> */}
            {/* <h3>communityCards: {communityCards}</h3> */}
            {/* <h3>stage: {stage}</h3> */}
        </div>
    )
}

export default Hand