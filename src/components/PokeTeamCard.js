import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeCard}) {
    const [toggleSprite, setToggleSprite] = useState(false);
    const handleToggleSprite = () =>{
      setToggleSprite(!toggleSprite)
    }

  return (
    <Card>
      <div>
        <div className="header">{pokeCard.name}</div>

        <div className="image" onClick={handleToggleSprite}>
          <img alt="oh no!" src={toggleSprite ? pokeCard.sprites.back : pokeCard.sprites.front}/>
        </div>
        
        <br/>
      </div>
    </Card>
  );
}

export default PokemonCard;
