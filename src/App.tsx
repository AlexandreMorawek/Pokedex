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
    name: "Mew",
  },
];


function App() {
  return (
    <>
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
    </>
  );
}

export default App;