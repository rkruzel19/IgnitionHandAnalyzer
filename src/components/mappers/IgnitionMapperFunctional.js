import HandData from "../../Tourny38970560.txt";
import {useState, useEffect} from "react";
import Tournament from "../Tournament" 
import TournamentMapper from "./TournamentMapper";


function IgnitionMapperFunctional() {

    const [fileText, setFileText] = useState("")
    const [allHands, setAllHands] = useState("")

    function handleClick(){
        fetch(HandData)
        .then(function(response) {
            return response.text()
        })
        .then(function(data){
            setFileText(data)
            setAllHands(setupTournament(data))
        }) 
    }

    function setupTournament(tournamentText){
        return TournamentMapper(tournamentText)   
    }

    return (
        <div>
            <button onClick={handleClick}>Upload File</button><br/>
            {allHands}
        </div>
    )
}

export default IgnitionMapperFunctional