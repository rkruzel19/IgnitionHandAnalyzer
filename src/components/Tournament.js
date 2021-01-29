import {useState} from "react"
import '../style/Tournament.css';

function Tournament(props){

    const [id, setId] = useState(props.info.id)
    const [startTime, setTimeStamp] = useState(props.info.startTime)
    const [hands, setHands] = useState(props.info.hands)
    const [extra, setExtra] = useState(props.info.extra)

    return (
        <div className="tournament">
            <div className="tournament_id">Tournament id: {id}</div>
            <div className="start_time">Start time: {startTime}</div>
            <div className="extra">Extra: {extra}</div>
            <div className="hands">Hands: {hands}</div>
        </div>
    )
}

export default Tournament