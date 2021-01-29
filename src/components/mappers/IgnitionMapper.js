import HandData from "../../JackpotSNG.txt";
// import HandData from "../../ScheduledTournament.txt";
import {useState, useEffect} from "react";
import Tournament from "../Tournament" 
import TournamentMapper from "./TournamentMapper";


function IgnitionMapper() {

    const [fileText, setFileText] = useState("")
    const [tournament, setTournament] = useState("")

    function handleClick(){
        fetch(HandData)
        .then(function(response) {
            return response.text()
        })
        .then(function(data){
            setFileText(data)
            setTournament(setupTournament(data))
        }) 
    }

    function setupTournament(tournamentText){
        return TournamentMapper(tournamentText)   
    }

    return (
        <div>
            <button onClick={handleClick}>Upload File</button><br/>
            {tournament}
        </div>
    )
}

export default IgnitionMapper