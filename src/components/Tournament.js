import {useState} from "react"

function Tournament(props){

    const [id, setId] = useState(props.info.id)
    const [timeStamp, setTimeStamp] = useState(props.info.timeStamp)
    const [playerList, setPlayerList] = useState(props.info.playerList)
    const [winners, setWinners] = useState(props.info.winners)
    const [hands, setHands] = useState(props.info.hands)
    const [extra, setExtra] = useState(props.info.extra)
    const [prizePool, setPrizePool] = useState(props.info.prizePool)

    return (
        <div>
            <h1>Tournament id: {id}</h1>
            <h1>TimeStamp: {timeStamp}</h1>
            <h1>PlayerList: {playerList}</h1>
            <h1>Winners: {winners}</h1>
            <h1>Hands: {hands}</h1>
            <h1>Extra: {extra}</h1>
            <h1>PrizePool: {prizePool}</h1>
        </div>
    )
}

export default Tournament