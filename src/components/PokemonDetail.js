// import { Card } from "semantic-ui-react";
import React, {useState} from 'react';
import { Form } from "semantic-ui-react";


function PokemonDetail({selectedPokemon, handleSavedPokemon}){
    const [toggleSprite, setToggleSprite] = useState(false);
    const handleToggleSprite = () =>{
      setToggleSprite(!toggleSprite)
    }

    return(
        <>
                <h1>{selectedPokemon.name}</h1>
                <div className="image" onClick={handleToggleSprite}>
                    <img height="250px" alt="oh no!" src={toggleSprite ? selectedPokemon.sprites.back : selectedPokemon.sprites.front}/>
                </div>
                <Form className="form">
                    <Form.Group widths="equal" >
                        <Form.Input fluid label="Nature" placeholder="Nature" />
                        <Form.Input fluid label="Item" placeholder="Item" />
                    </Form.Group>
                </Form>
                <Form.Button onClick={() => handleSavedPokemon(selectedPokemon)}>Add to Team</Form.Button>
                <br/>
                <br/>
        </>
        

    )
}

export default PokemonDetail