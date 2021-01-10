import React from "react"
import Hand from "../Hand"
import PlayerMapper from "./PlayerMapper"

function HandMapper(hand){

    const handIdRegex = /(?<=Hand #)\d+/ 
    const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/
    const blindLevelRegex = /Level .+\)/
    const playerInfoRegex = /(?<=\d{2}:\d{2}\r\n)(.|\r\n)*(?<=\nSeat \d.*)/

    const handId = handIdRegex.exec(hand)[0]
    const timeStamp = timeStampRegex.exec(hand)[0]
    const blindLevel = blindLevelRegex.exec(hand)[0]
    const playerInfo = playerInfoRegex.exec(hand)[0]
  
    const allPlayers = playerInfo.split("\r\n")
    var playerComponents = []

    allPlayers.forEach(player => {
        const playerComponent = PlayerMapper(player)
        playerComponents.push(playerComponent)
    });

    const mockHand = <Hand
        info = {{
            id: handId,
            startTime: timeStamp,
            blindLevel: blindLevel,
            players: playerComponents
        }}
    />

    return mockHand
}

export default HandMapper