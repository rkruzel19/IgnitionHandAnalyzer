import React from "react";
import HandData from "../Tourny38970560.txt";
import Tournament from "./Tournament";


class IgnitionMapperClass extends React.Component {
    constructor(){
        super()
        this.state = {
            fileText: ""
        }
    
    }

    componentDidMount(){
        fetch(HandData)
        .then(response => {
            return response.text()
        })
        .then(data => {
            this.setState({ fileText: data})
        })
    }

    render(){

        if(this.state.fileText === undefined){
            return (
                <div>
                    <h1>File is undefined</h1>
                </div>
            )
        } else {

                // Split txt file into each Hand of tournament. Then grabbed FirstHand for testing
                const hands = this.state.fileText.split("\r\n\r\n\r\n")
                const firstHand = hands[0]

                // Create regex for TournamentInfo. has hand info as well
                // Create regex for the info values I need and save to be used when Tournament is instantiated
                const tournamentInfoRegex = /Ignition.*/
                const tournamentInfo = firstHand.match(tournamentInfoRegex)

                const handIdRegex = /(?<=Hand #)\d+/
                const handId = firstHand.match(handIdRegex)

                const tournamentIdRegex = /(?<=Tournament #)\d+/
                const tournamentId = firstHand.match(tournamentIdRegex)
                //console.log(tournamentId)

                const timeStampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/
                const timeStamp = firstHand.match(timeStampRegex)

                // Create Tournament component using data pulled from txt file
                const testTournament = <Tournament 
                    info = {{ 
                        id: tournamentId, 
                        timeStamp: timeStamp,
                        hands: handId
                    }}
                />

                return (
                    <div>
                        {firstHand}
                        <h1>--------------------</h1>
                        {/* {testTournament} */}
                        {/* {tournamentInfo}
                        <h1>--------------------</h1>
                        {tournamentId}
                        <h1>--------------------</h1>
                        {handId}
                        <h1>--------------------</h1>
                        {timeStamp}
                        <h1>--------------------</h1> */}
                    </div>
                )
            }
        
    }
}

export default IgnitionMapperClass