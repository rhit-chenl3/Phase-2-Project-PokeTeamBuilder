import React from "react";
import PokeTeamCard from "./PokeTeamCard"
import { Card } from "semantic-ui-react";

function PokeTeam({savedTeams, handleDelete}) {
    return (
        <>  
            <h3>TEAM {savedTeams.id}</h3>
            <br/>
            <Card.Group itemsPerRow={6}>
                {savedTeams.pokeTeam.map(poke => <PokeTeamCard pokeCard={poke} key={poke.id}/>)}
            </Card.Group>  
            <br/>
            <button onClick={() => handleDelete(savedTeams)}>Delete Team</button>
            <br/>
        </>
        
    );
}

export default PokeTeam;
