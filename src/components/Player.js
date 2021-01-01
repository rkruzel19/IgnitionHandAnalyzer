import {useState} from "react"

function Player() {

    const [id, setId] = useState(1)
    const [stackSize, setStackSize] = useState(1000)
    const [holeCards, setHoleCards] = useState(["Ah", "7s"])
    const [position, setPosition] = useState("")
    const [seatPosition, setSeatPosition] = useState(3)


    return (
        <div>
            <h1>Player id: {id}</h1>
            <h1>Stack size: {stackSize}</h1>
            <h1>Hole cards: {holeCards}</h1>
            <h1>Position: {position}</h1>
            <h1>Seat Position: {seatPosition}</h1>
        </div>
    )
}

export default Player