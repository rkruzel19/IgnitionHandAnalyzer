import {useState} from "react"
import '../style/Player.css';

function Player(props) {

    const [id, setId] = useState(props.info.id)
    const [stackSize, setStackSize] = useState(props.info.stackSize)
    const [holeCards, setHoleCards] = useState(props.info.holeCards)
    const [position, setPosition] = useState(props.info.position)
    const [seatPosition, setSeatPosition] = useState(props.info.seatPosition)

    return (
        <div className="player">
            <div className="player_id">{id}</div>
            <div className="stack_size">{stackSize}</div>
            <div className="hole_cards">{holeCards}</div>
            <div className="positon">{position}</div>
        </div>
    )
}

export default Player