import { useState } from "react";
import "./App.css";
import axios from "axios";
import PokeList from "./PokeList";

function App() {
const [pokemon, setPokemon] = useState([])

  axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
    console.log(res.data.results);
    console.log(res.data.results.map(p => p.name));
    setPokemon(res.data.results.map(p => p.name));
  })

  return <div className="App">
    <PokeList pokemon={pokemon} />
  </div>;
}

export default App;
