import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";



const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      alt: "Bulbasaur",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    alt: "Charmander",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    alt: "Squirtle",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    alt: "Pikachu",
  },
  {
    name: "Mew",
    alt: "Mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
 
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }
  return (
    <>
    <nav>
      {pokemonList.map((pokemonName) => (
        <ul className="list">
        <li key={pokemonName.name}>
          <button onClick={() => setPokemonName(pokemonName.name)}>{pokemonName.name}</button>
        </li>
        </ul>
      ))}
    </nav>
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
    
    </>
  );
}

export default App;