import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import PokemonDetail from "./PokemonDetail";
import PokeTeam from "./PokeTeam"
import PokeSavedTeam from "./PokeSavedTeamPage";
import NavBar from "./NavBar";
import {Route, Switch} from "react-router-dom";

function PokemonPage() {
  const [pokeFilterList, setPokeFilterList] = useState([]); 
  const [pokeList, setPokeList] = useState([]); // original list that isn't modified
  const [teamList, setTeamList] = useState([]);
  const [savedPokemon, setSavedPokemon] = useState([]);
  // const [savedTeamList, setSavedTeamList] = useState([]);
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

  const handleAddTeam = (e) => {
    const newTeam = {
      id: "",
      pokeTeam: teamList
    };

    e.preventDefault()
    fetch('http://localhost:3001/teams',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newTeam)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // setSavedTeamList([data, ...savedTeamList])
    })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPokeFilterList(pokeList.filter(poke => poke.name.includes(e.target.value)))
  }

  const handleSelectPokemon = (poke) => {
    setSelectedPokemon(poke)
  }

  const handleSavedPokemon = (poke) => {
    setSavedPokemon(poke)
    if(teamList.includes(poke)){
      alert("Teams may only contain unique pokemon!");
    } else if(teamList.length < 6){
      setTeamList([poke, ...teamList])
    } else{
      setTeamList(teamList.pop())
      setTeamList([poke, ...teamList])
    }
  }

  const handleResetSaved = () => {
    setTeamList([]);
  }

  if (!isLoaded) return <h1> Loading... </h1>;

  return (
    <Container>
      <h1>Pokemon Team Builder</h1>
      <br />
      {selectedPokemon ? <PokemonDetail selectedPokemon={selectedPokemon} handleSavedPokemon={handleSavedPokemon} /> : null}
      {/* <PokemonForm addPoke={addPoke}/> */}
      <br />
      {savedPokemon ? <PokeTeam teamList={teamList} handleAddTeam={handleAddTeam} handleResetSaved={handleResetSaved}/> : null}
      <br />
      <h2>POKEDEX</h2>
      <Search search={search} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokeList={pokeFilterList} handleSelectPokemon={handleSelectPokemon}/>
      <br />
      {/* <PokeSavedTeam savedTeamList = {savedTeamList} /> */}
    </Container>
  );
}

export default PokemonPage;
