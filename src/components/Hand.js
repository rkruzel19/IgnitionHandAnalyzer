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
    const [totalPot, setTotalPot] = useState(props.info.totalPot)
    const [eventSummary, setEventSummary] = useState(props.info.eventSummary)

    return (
        <div className="hand">
            <div className="hand_info">
                <div className="hand_id">Hand #{id}</div>
                <div className="start_time">{startTime}</div>
                <div className="blind_level">{blindLevel}</div>
            </div>

            <div className="center_area">
                <div className="action">{action}</div>
                <div className="board">
                    <div className="community_cards">{communityCards}</div>
                    <div className="pot">total pot: {totalPot}</div>
                </div>
                <div className="summary">{eventSummary}</div>
            </div>

            <div className="players">{players}</div>
        </div>
    )
}

export default Hand