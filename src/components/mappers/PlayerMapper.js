import React from "react"
import Player from "../Player"

function PlayerMapper(hand) {
    
    const playerInfoRegex = /(?<=\d{2}:\d{2}\r\n)(.|\r\n)*(?<=\nSeat \d.*)/
    const playerInfo = playerInfoRegex.exec(hand)[0]
    
    const allPlayers = playerInfo.split("\r\n")
    var playerComponents = []

    allPlayers.forEach(player => {
        
        const playerIdRegex = /Seat \d+/
        const positionRegex = /(?<=Seat \d+: )\w+( |\+|\w)+(?= )/
        const stackRegex = /(?<=\()(\d|,)+/
        
        const playerId = playerIdRegex.exec(player)[0]
        const position = positionRegex.exec(player)[0]
        const stack = stackRegex.exec(player)[0]

        const mockPlayer = <Player
            info = {{
                id: playerId,
                position: position,
                stackSize: stack
            }}
        />

        playerComponents.push(mockPlayer)
    
    });

    return playerComponents

}

export default PlayerMapper