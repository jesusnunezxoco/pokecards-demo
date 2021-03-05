import React, { useEffect, useState } from "react";
import {useRouteMatch} from "react-router-dom"
import axios from "axios";

export default function Result() {
  const [pokemon, setPokemon] = useState({
    name: "bulbasaur",
    id: 1,
    description: "ugly green pokemon",
    generation: "gen-1",
    category: "lizard",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
  });

  const match = useRouteMatch()


  const pokeid = match.params.id
  console.log(pokeid)
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeid}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
      
        let d = response.data;
        
        setPokemon({
          name: d.name,
          id: d.id,
          description: d.flavor_text_entries[6].flavor_text,
          generation: d.generation.name,
          category: d.genera[7].genus,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div key={pokemon.id}>
      <h2>
        {pokemon.name} #{pokemon.id}
      </h2>
      <figure>
        <img src={pokemon.image} alt={`${pokemon.name} sprite`}/>
      </figure>
      <p>{pokemon.description}</p>
      <p>{pokemon.generation}</p>
      <p>{pokemon.category}</p>
    </div>
  );
}
