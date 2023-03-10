import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const addPokemon = async name => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
  };
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
          <button onClick={clearPokemon}>Remove the Pokemon.</button>
          </div>
          <div className="PokeDex-card-area">
              {pokemon.map(card => (
                <PokemonCard key={card.id} {...card} />
              ))}
              </div>
              </div>
              );
            }