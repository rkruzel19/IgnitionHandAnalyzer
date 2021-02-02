import Hand from "./Hand"
import Player from "./Player"
import Tournament from "./Tournament"


function MockTournamentComp(){

    const player1 = <Player 
        info = {{
            id: "Rob Kruzel",
            stackSize: 3500,
            position: "Dealer",
            holeCards: "Js Jd"
        }}
    />

    const player2 = <Player 
        info = {{
            id: "Slav Kambalov",
            stackSize: 4800,
            position: "Small Blind",
            holeCards: "As 3h"
        }}
    />

    const player3 = <Player 
        info = {{
            id: "Amy Huntoon",
            stackSize: 2800,
            position: "Big Blind",
            holeCards: "7c 6c"
        }}
    />

    const player4 = <Player 
        info = {{
            id: "Moose",
            stackSize: 500,
            position: "UTG",
            holeCards: "Jc 2d"
        }}
    />

    const player5 = <Player 
        info = {{
            id: "Josh Dizzel",
            stackSize: 9999,
            position: "UTG+1",
            holeCards: "Ah Ad"
        }}
    />

    const hand1 = <Hand
        info = {{
            id: "4869487376785",
            startTime: "12/94/67 08:78:03",
            action: ["A bunch", "of frigggggin", "action"],
            communityCards: "6h Ts Js Kh 4c",
            blindLevel: "Level 5 (200/400)",
            totalPot: "4200",
            eventSummary: ["I guess", "there's", "some summary"], 
            players: [player1, player5, player2, player3]
        }}
    />

    const hand2 = <Hand
        info = {{
            id: "3265843473",
            startTime: "12/94/67 08:78:03",
            action: ["A bunch", "of frigggggin", "action"],
            communityCards: "8s 8d 8h 9h 9s",
            blindLevel: "Level 5 (200/400)",
            totalPot: "3000",
            eventSummary: ["I guess", "there's", "some summary"], 
            players: [player4, player2, player3]
        }}
    />

    const hand3 = <Hand
        info = {{
            id: "746443131335",
            startTime: "12/94/67 08:78:03",
            action: ["A bunch", "of frigggggin", "action"],
            communityCards: "7s 3h Qd",
            blindLevel: "Level 5 (100/200)",
            totalPot: "800",
            eventSummary: ["I guess", "there's", "some summary"], 
            players: [player3, player5, player4, player2, player1]
        }}
    />

    const hand4 = <Hand
        info = {{
            id: "421131658464",
            startTime: "12/94/67 08:78:03",
            action: ["A bunch", "of frigggggin", "action"],
            communityCards: "6d 6s 8s 9d",
            blindLevel: "Level 5 (200/400)",
            totalPot: "1250",
            eventSummary: ["I guess", "there's", "some summary"], 
            players: [player1, player5, player2, player4]
        }}
    />

    const mockTournament = <Tournament
        info = {{
            id: "4363463626256",
            startTime: "85/23/31 23:63:43",
            extra: "no extra",
            hands: [hand1, hand2, hand3, hand4]
        }}
    />

    return mockTournament
}

export default MockTournamentComp