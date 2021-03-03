import React from "react";

export default function Cards(props) {
  console.log(props.pokecards);

  return (
    <div id="cards-container">
      {props.pokecards.map((pokecard) => (
        <article className="card">
          <figure>
            <img src={pokecard.image} alt={`${pokecard.name} sprite`} />
          </figure>
          <h3>
            {pokecard.name} <span>{pokecard.id}</span>
          </h3>
        </article>
      ))}
    </div>
  );
}
