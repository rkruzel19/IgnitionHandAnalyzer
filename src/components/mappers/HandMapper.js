import React from "react"
import Hand from "../Hand"
import PlayerMapper from "./PlayerMapper"

function HandMapper(tournamentText){

    const hands = tournamentText.split("\r\n\r\n\r\n")
    var handComponents = []

    hands.forEach(hand => {
        
        // Hand Info

        const handIdRegex = /(?<=Hand #)\d+/ 
        const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/
        const blindLevelRegex = /Level .+\)/
        
        const handId = handIdRegex.exec(hand)[0]
        const timeStamp = timeStampRegex.exec(hand)[0]
        const blindLevel = blindLevelRegex.exec(hand)[0]
        
        // Player Info
       
        var playerComponents = PlayerMapper(hand)

        // Action Info

        const action = [] 

        const setupStageRegex = /.+Set(.|\r\n)+(?=\r\n.+HOLE)/
        const setupStage = setupStageRegex.exec(hand)[0]
        const allStageLines = setupStage.split("\r\n")

        allStageLines.forEach(line => {
            action.push(line)
        });

        const mockHand = <Hand
            info = {{
                id: handId,
                startTime: timeStamp,
                blindLevel: blindLevel,
                players: playerComponents,
                action: action
            }}
        />

        handComponents.push(mockHand)
    
    });

    return handComponents

}

export default HandMapper