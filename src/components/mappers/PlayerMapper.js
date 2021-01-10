import React from "react"
import Player from "../Player"

function PlayerMapper(player) {

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

    return mockPlayer

}

export default PlayerMapper