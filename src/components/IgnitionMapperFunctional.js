import HandData from "../Tourny38970560.txt";
import {useState, useEffect} from "react";
import Tournament from "./Tournament" 


function IgnitionMapperFunctional() {

    const [fileText, setFileText] = useState("")
    const [allHands, setAllHands] = useState("")

    function handleClick(){
        fetch(HandData)
        .then(function(response) {
            return response.text()
        })
        .then(function(data){
            setFileText(data)
            setAllHands(setupTournament(data))
        }) 
    }

    function setupTournament(tournamentText){

        var tournamentComponents = []

        const hands = tournamentText.split("\r\n\r\n\r\n")
        // const firstHand = hands[0]

        hands.forEach(hand => {
            const tournamentInfoRegex = /Ignition.*/
            const handIdRegex = /(?<=Hand #)\d+/
            const tournamentIdRegex = /(?<=Tournament #)\d+/
            const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/

            const tournamentInfo = tournamentInfoRegex.exec(hand)[0]  
            const handId = handIdRegex.exec(tournamentInfo)[0]
            const tournamentId = tournamentIdRegex.exec(tournamentInfo)[0]
            const timeStamp = timeStampRegex.exec(tournamentInfo)[0]

            const mockTournament = <Tournament
                info = {{
                    id: tournamentId,
                    hands: handId,
                    startTime: timeStamp
                }}
            />
            
            tournamentComponents.push(mockTournament)
        });

        return tournamentComponents
    }

    return (
        <div>
            <button onClick={handleClick}>Upload File</button><br/>
            {allHands}
        </div>
    )
}

export default IgnitionMapperFunctional