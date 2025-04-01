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

function PokemonCard() {
    const pokemon = pokemonList[0];
    return <>
        {pokemon.name}<br></br>
        {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc}/>}         
        </>;
  }
  
  export default PokemonCard;

  
  