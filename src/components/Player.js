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
            <h3>Player id: {id}</h3>
            <h3>Stack size: {stackSize}</h3>
            <h3>Hole cards: {holeCards}</h3>
            <h3>Position: {position}</h3>
            {/* <h3>Seat Position: {seatPosition}</h3> */}
            <h3>----------------------</h3>
        </div>
    )
}

export default Player