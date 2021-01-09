import React from "react"
import Tournament from "../Tournament"

function TournamentMapper(tournamentText) {

    var handComponents = []

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
        
        handComponents.push(mockTournament)
    });

    return (
        <div>
            {handComponents}
        </div>
    )

}

export default TournamentMapper