import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList, handleSelectPokemon}) {
  return (
    <Card.Group itemsPerRow={10}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokeList.map(poke => <PokemonCard pokeCard={poke} key={poke.id} handleSelectPokemon={handleSelectPokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
