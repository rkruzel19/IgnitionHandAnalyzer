import HandData from "../Tourny38970560.txt";
import {useState, useEffect} from "react";
import Tournament from "./Tournament"

function IgnitionMapper() {

    const [fileText, setFileText] = useState("")
    

    useEffect(() => {
        fetch(HandData)
        .then(function(response) {
            return response.text()
        })
        .then(function(data){
            setFileText(data)
        })
    }, [fileText])

    // Split txt file into each Hand of tournament. Then grabbed FirstHand for testing
    const hands = fileText.split("\r\n\r\n\r\n")
    const firstHand = hands[0]

    // Create regex for TournamentInfo. has hand info as well
    // Create regex for the info values I need and save to be used when Tournament is instantiated
    const tournamentInfoRegex = /Ignition.*/
    const tournamentInfo = firstHand.match(tournamentInfoRegex).toString()

    const handIdRegex = /(?<=Hand #)\d+/
    const handId = firstHand.match(handIdRegex).toString()

    const tournamentIdRegex = /(?<=Tournament #)\d+/
    const tournamentId = firstHand.match(tournamentIdRegex).toString()

    const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/
    const timeStamp = firstHand.match(timeStampRegex)

    // Create Tournament component using data pulled from txt file
    const testTournament = <Tournament 
        info = {{ 
            id: tournamentId, 
            timeStamp: timeStamp,
            hands: handId 
        }}
    />

    return (
        <div>
            {firstHand}

            {testTournament}
        </div>
    )
}

export default IgnitionMapper