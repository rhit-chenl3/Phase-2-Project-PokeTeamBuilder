import React, {useEffect, useState} from "react";
import { Container } from "semantic-ui-react";
import PokeSavedTeam from "./PokeSavedTeam";

function PokeSavedTeamPage() {
    const [savedTeamList, setSavedTeamList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/teams")
        .then(resp => resp.json())
        .then(teams => {
            setSavedTeamList(teams)
        })
      },[])
    
    return (
        <>
            <h2>SAVED TEAMS</h2>
            <br/>
            {savedTeamList.map(savedTeams => <PokeSavedTeam savedTeams={savedTeams} key={savedTeams.id}/>)}
            <br/>
        </>
        
        
    );
}

export default PokeSavedTeamPage;
