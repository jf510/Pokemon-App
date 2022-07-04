import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokeList from "./PokeList";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  
  useEffect(() => {
    axios.get(currentPage).then(res => {
      console.log(res.data.results);
      console.log(res.data.results.map(p => p.name));
      setPokemon(res.data.results.map(p => p.name));
    })
  }, [currentPage])

 

  return <div className="App">
    <PokeList pokemon={pokemon} />
  </div>;
}

export default App;
