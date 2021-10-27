import React from "react";
import PokeTeamCard from "./PokeTeamCard"
import { Card } from "semantic-ui-react";

function PokeTeam({teamList}) {
    console.log(teamList)
    return (
        <>  
            <h2>TEAM</h2>
            <br/>
            <Card.Group itemsPerRow={6}>
                {/* <h1>Build Your Team!</h1> */}
                {teamList.map(poke => <PokeTeamCard pokeCard={poke} key={poke.id}/>)}
            </Card.Group>  
            <button>Save Team</button>
            <br/>
        </>
        
        
    );
}

export default PokeTeam;
