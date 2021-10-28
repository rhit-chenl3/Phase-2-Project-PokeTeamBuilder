import React from "react";
import PokeTeamCard from "./PokeTeamCard"
import { Card } from "semantic-ui-react";

function PokeTeam({teamList, handleAddTeam, handleResetSaved}) {
    console.log(teamList)
    return (
        <>  
            <h2>TEAM</h2>
            <br/>
            <Card.Group itemsPerRow={6}>
                {/* <h1>Build Your Team!</h1> */}
                {teamList.map(poke => <PokeTeamCard pokeCard={poke} key={poke.id}/>)}
            </Card.Group>  
            <br/>
            <button onClick={ (e) => {
                handleAddTeam(e)
                alert("Successfully saved your team!")
                }}>Save Team</button>
            <button onClick={handleResetSaved}>Reset</button>
            <br/>
        </>
        
        
    );
}

export default PokeTeam;
