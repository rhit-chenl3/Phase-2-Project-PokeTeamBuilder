import React from "react";
import PokemonPage from "./PokemonPage";
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import PokeSavedTeamPage from "./PokeSavedTeamPage";
import About from "./About";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/about"> <About/> </Route>
        <Route path="/teams"> <PokeSavedTeamPage/> </Route>
        <Route path="/"> <PokemonPage/> </Route>
      </Switch>
    </div>
  );
}

export default App;
