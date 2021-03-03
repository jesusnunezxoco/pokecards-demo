import React, {useState, useEffect} from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./components/Favorites";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [pokecards, setPokecards] = useState([
    {
      name: "bulbasaur",
      id: 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
    },
    {
      name: "ivysaur",
      id: 2,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
    },
    {
      name: "venosaur",
      id: 3,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`,
    }
  ])

  const base = "https://pokeapi.co/api/v2"
  useEffect(() => {
    axios.get(`${base}/pokemon?limit=150`)
    .then(response => {
      console.log(response.data.results)
      setPokecards(response.data.results.map((result, i) => ({
        name: result.name,
        id: i+1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`,
      })))

    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Search />
            <h1>Pokemon App</h1>
            <Cards pokecards={pokecards}/>
          </Route>

          <Route path="/favorites" component={Favorites} />
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
