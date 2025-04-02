type pokemonProps = {
    pokemon:{
    name: string;
    imgSrc?: string;
    alt?: string; 
    }
}

function PokemonCard({pokemon} : pokemonProps) {
    return <>
        {pokemon.name}<br></br>
        {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc}/>}
        </>;
  }
  
  export default PokemonCard;

  
  