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
    
    const handleDelete = (deletedTeam) => {
    fetch(`http://localhost:3001/teams/${deletedTeam.id}`,{
        method:'DELETE'
    })
    .then(() => {
        const newSavedTeamList = savedTeamList.filter(teams => teams.id !== deletedTeam.id)
        setSavedTeamList(newSavedTeamList)
        })
    }
    
    return (
        <Container>
            <h2>SAVED TEAMS</h2>
            <br/>
            {savedTeamList.map(savedTeams => <PokeSavedTeam savedTeams={savedTeams} key={savedTeams.id} handleDelete={handleDelete}/>)}
            <br/>
        </Container>
        
        
    );
}

export default PokeSavedTeamPage;
