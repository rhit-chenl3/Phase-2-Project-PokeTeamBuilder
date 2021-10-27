import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeCard, handleSelectPokemon}) {
  

  return (
    <Card>
      <div onClick={() => handleSelectPokemon(pokeCard)}>
        <div className="content" >
          <div className="header">{pokeCard.name}</div>
        </div>

        <div className="image" >
          <img alt="oh no!" src={pokeCard.sprites.front}/>
        </div>
        
        <br/>
        {/* <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeCard.hp}
          </span>
        </div> */}
      </div>
    </Card>
  );
}

export default PokemonCard;
