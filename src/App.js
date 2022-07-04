import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokeList from "./PokeList";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [peviousPage, setPreviousPage] = useState()
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      console.log(res.data.results);
      console.log(res.data.results.map(p => p.name));
      setPokemon(res.data.results.map(p => p.name));
      setNextPage(res.data.next)
      setPreviousPage(res.data.previous);
    })

    return () => {

    }
  }, [currentPage])

  if (loading) return "Loading..."

 

  return <div className="App">
    <PokeList pokemon={pokemon} />
  </div>;
}

export default App;
