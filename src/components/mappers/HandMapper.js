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
        const secondarySetupRegex = /(?!(.|\r\n)+(?<=in chips\)\r\n))(.|\r\n)+(?=\r\n.+HOLE)/
        const setupStage = setupStageRegex.test(hand) === true ? setupStageRegex.exec(hand)[0] : secondarySetupRegex.exec(hand)[0]
        const allStageLines = setupStage.split("\r\n")

        const actionRegex = /(?!(.|\r\n)+(?<=\[.{5}\] \r\n))(.|\r\n)*(?=\r\n.*SUMMARY)/
        const actionBlock = actionRegex.exec(hand)[0]
        const actionByLine = actionBlock.split("\r\n")

        allStageLines.forEach(line => {
            action.push(line)
        });

        actionByLine.forEach(line => {
            action.push(line)
        });

        // Summary Info
        const summaryRegex = /(?<=SUMMARY.*\r\n)(.|\r\n)*/
        const summary = summaryRegex.exec(hand)[0]

        const totalPotRegex = /(?<=\()\d*/
        const totalPot = totalPotRegex.exec(summary)[0]

        const communityCardsRegex = /(?<=Board \[)( |\w{2})*(?=\])/
        const communityCards = communityCardsRegex.test(summary) === true ? communityCardsRegex.exec(summary)[0] : "NO FLOP"

        const playerSummaryRegex = /(?=Seat)(.|\r\n)*/
        const playerSummaries = playerSummaryRegex.exec(summary)[0]
        const eventSummary = playerSummaries.split("\r\n")

        const mockHand = <Hand
            info = {{
                id: handId,
                startTime: timeStamp,
                blindLevel: blindLevel,
                players: playerComponents,
                action: action,
                totalPot: totalPot,
                communityCards: communityCards,
                eventSummary: eventSummary
            }}
        />

        handComponents.push(mockHand)
    
    });

    return handComponents

}

export default HandMapper