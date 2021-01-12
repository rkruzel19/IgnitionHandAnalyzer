import React from "react"
import Player from "../Player"

function PlayerMapper(hand) {
    
    const playerInfoRegex = /(?<=\d{2}:\d{2}\r\n)(.|\r\n)*(?<=\nSeat \d.*)/
    const holeCardMatchRegex = /(?<=HOLE.*\r\n)(.|\r\n)*(?<=dealt to.*)/
    
    const playerInfo = playerInfoRegex.exec(hand)[0]
    const holeCardText = holeCardMatchRegex.exec(hand)[0]
    
    const allPlayerInfo = playerInfo.split("\r\n")
    const eachPlayerHoleCards = holeCardText.split("\r\n")
     
    var playerComponents = []

    for(let i = 0; i < allPlayerInfo.length; i++){

        const playerIdRegex = /Seat \d+/
        const positionRegex = /(?<=Seat \d+: )\w+( |\+|\w)+(?= )/
        const stackRegex = /(?<=\()(\d|,)+/
        const playerCardsRegex = /(?<=\[).{5}(?=\])/

        const playerId = playerIdRegex.exec(allPlayerInfo[i])[0]
        const position = positionRegex.exec(allPlayerInfo[i])[0]
        const stack = stackRegex.exec(allPlayerInfo[i])[0]
        const holeCards = playerCardsRegex.exec(eachPlayerHoleCards[i])[0]
        
        const mockPlayer = <Player
            info = {{
                id: playerId,
                position: position,
                stackSize: stack,
                holeCards: holeCards
            }}
        />

        playerComponents.push(mockPlayer)

    }

    return playerComponents

}

export default PlayerMapper