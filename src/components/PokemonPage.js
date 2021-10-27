import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
// import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import PokemonDetail from "./PokemonDetail";
import PokeTeam from "./PokeTeam"

function PokemonPage() {
  const [pokeFilterList, setPokeFilterList] = useState([]); 
  const [pokeList, setPokeList] = useState([]); // original list that isn't modified
  const [teamList, setTeamList] = useState([]);
  const [savedPokemon, setSavedPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(poke => {
      setPokeList(poke)
      setPokeFilterList(poke)
      setIsLoaded(true)
    })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPokeFilterList(pokeList.filter(poke => poke.name.includes(e.target.value)))
  }

  const handleSelectPokemon = (poke) => {
    setSelectedPokemon(poke)
  }

  const handleSavedPokemon = (poke) => {
    setSavedPokemon(poke)
    setTeamList([poke, ...teamList])
  }

  // const addPoke = (newPoke) =>{
  //   setPokeFilterList(currentList => [...currentList, newPoke])
  //   setPokeList(currentList => [...currentList, newPoke])
  // }

  if (!isLoaded) return <h1> Loading... </h1>;

  return (
    <Container>
      <h1>Pokemon Team Builder</h1>
      <br />
      {selectedPokemon ? <PokemonDetail selectedPokemon={selectedPokemon} handleSavedPokemon={handleSavedPokemon}/> : null}
      {/* <PokemonForm addPoke={addPoke}/> */}
      <br />
      {savedPokemon ? <PokeTeam teamList={teamList}/> : null}
      <br />
      <h2>POKEDEX</h2>
      <Search search={search} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokeList={pokeFilterList} handleSelectPokemon={handleSelectPokemon}/>
    </Container>
  );
}

export default PokemonPage;
