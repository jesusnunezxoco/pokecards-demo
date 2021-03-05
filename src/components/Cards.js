import React from "react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  console.log(props.pokecards);

  return (
    <div className="container" id="cards-container">
      {props.pokecards.map((pokecard) => (
        <article className="card">
          <Link to={`/pokemon/${pokecard.id}`}>
            <figure>
              <img src={pokecard.image} alt={`${pokecard.name} sprite`} />
            </figure>
          </Link>
          <Link to={`/pokemon/${pokecard.id}`}>
          <h3>
            {pokecard.name} <span>{pokecard.id}</span>
          </h3>
          </Link>
        </article>
      ))}
    </div>
  );
}
