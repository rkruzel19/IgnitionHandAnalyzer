import React from "react"
import Tournament from "../Tournament"
import HandMapper from "./HandMapper"

function TournamentMapper(tournamentText) {

    const tournamentInfoRegex = /Ignition.*/
    const tournamentIdRegex = /(?<=Tournament #)\d+/
    const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/

    const tournamentInfo = tournamentInfoRegex.exec(tournamentText)[0]
    const timeStamp = timeStampRegex.exec(tournamentInfo)[0]
    const tournamentId = tournamentIdRegex.exec(tournamentInfo)[0]

    var handComponents = HandMapper(tournamentText)

    const mockTournament = <Tournament
        info = {{
            id: tournamentId,
            hands: handComponents,
            startTime: timeStamp
        }}
    />

    return mockTournament
    

}

export default TournamentMapper