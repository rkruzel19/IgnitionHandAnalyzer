import {useState} from "react"

function Tournament(props){

    const [id, setId] = useState(props.info.id)
    const [startTime, setTimeStamp] = useState(props.info.startTime)
    const [hands, setHands] = useState(props.info.hands)
    const [extra, setExtra] = useState(props.info.extra)

    return (
        <div>
            <h3>Tournament id: {id}</h3>
            <h3>Start time: {startTime}</h3>
            <h3>Hands: {hands}</h3>
            <h3>Extra: {extra}</h3>
        </div>
    )
}

export default Tournament