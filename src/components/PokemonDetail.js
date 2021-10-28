// import { Card } from "semantic-ui-react";
import React, {useState} from 'react';
import { Form } from "semantic-ui-react";


function PokemonDetail({selectedPokemon, handleSavedPokemon}){
    const [toggleSprite, setToggleSprite] = useState(false);
    const handleToggleSprite = () =>{
      setToggleSprite(!toggleSprite)
    }

    const [formData, setFormData] = useState({
        id: selectedPokemon.id,
        name: selectedPokemon.name,
        hp: selectedPokemon.hp,
        sprites: {
            front: selectedPokemon.sprites.front,
            back: selectedPokemon.sprites.back
        },
        nature: "",
        item: ""
    })

    const handleFormChange = (e) => {
        // console.log(e.target.name, e.target.value)
        // console.log(formData.nature, formData.item)
        setFormData(currentFormData => Object.assign({...currentFormData}, {[e.target.name]:e.target.value}))
    }

    return(
        <>
            <h1>{selectedPokemon.name}</h1>
            <div className="image" onClick={handleToggleSprite}>
                <img height="250px" alt="oh no!" src={toggleSprite ? selectedPokemon.sprites.back : selectedPokemon.sprites.front}/>
            </div>
            <Form className="form" >
                <Form.Group widths="equal" >
                    <Form.Input fluid label="Nature" placeholder="Nature" name="nature" value={formData.nature} onChange={handleFormChange} />
                    <Form.Input fluid label="Item" placeholder="Item" name="item" value={formData.item} onChange={handleFormChange} />
                </Form.Group>
            </Form>
            <Form.Button onClick={() => {handleSavedPokemon(formData)}}>Add to Team</Form.Button>
            <br/>
            <br/>
        </>
        

    )
}

export default PokemonDetail