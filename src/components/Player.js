import {useState} from "react"
import '../style/Player.css';

function Player(props) {

    const [id, setId] = useState(props.info.id)
    const [stackSize, setStackSize] = useState(props.info.stackSize)
    const [holeCards, setHoleCards] = useState(props.info.holeCards)
    const [position, setPosition] = useState(props.info.position)
    const [seatPosition, setSeatPosition] = useState(props.info.seatPosition)

    function testFunction() {
        console.log("test works")
    }


    return (
        <div className="player">
            <h5>Player id: {id}</h5>
            <h5>Stack size: {stackSize}</h5>
            <h5>Hole cards: {holeCards}</h5>
            <h5>Position: {position}</h5>
            {/* <h3>Seat Position: {seatPosition}</h3> */}
            <h4>----------------------</h4>
        </div>
    )
}

export default Player