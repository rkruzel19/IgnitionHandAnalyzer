import HandData from "../Tourny38970560.txt";
import {useState, useEffect} from "react";
import Tournament from "./Tournament" 


function IgnitionMapperFunctional() {

    const [fileText, setFileText] = useState("")
    const [testTournament, setTestTournament] = useState("")

    function handleClick(){
        fetch(HandData)
        .then(function(response) {
            return response.text()
        })
        .then(function(data){
            setFileText(data)
            setTestTournament(setupTournament(data))
        }) 
    }

    function setupTournament(tournamentText){
        // Split txt file into each Hand of tournament. Then grabbed FirstHand for testing
        const hands = tournamentText.split("\r\n\r\n\r\n")
        const firstHand = hands[0]

        // Create regex for TournamentInfo. has hand info as well
        // Create regex for the info values I need and save to be used when Tournament is instantiated
        const tournamentInfoRegex = /Ignition.*/
        const handIdRegex = /(?<=Hand #)\d+/
        const tournamentIdRegex = /(?<=Tournament #)\d+/
        const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/

        const tournamentInfo = tournamentInfoRegex.exec(firstHand)[0]  
        const handId = handIdRegex.exec(tournamentInfo)[0]
        const tournamentId = tournamentIdRegex.exec(tournamentInfo)[0]
        const timeStamp = timeStampRegex.exec(tournamentInfo)[0]

        const mockTournament = <Tournament
            info = {{
                extra: tournamentInfo,
                id: tournamentId,
                hands: handId,
                timeStamp: timeStamp
            }}
        />

        return mockTournament
    }

    return (
        <div>
            <button onClick={handleClick}>Upload File</button><br/>
            
            {testTournament}
        </div>
    )
}

export default IgnitionMapperFunctional