type pokemon = {
    pokemon:{
    name: string;
    imgSrc?: string;
    alt?: string; 
}
}

function PokemonCard({pokemon} : pokemon) {
    return <>
        {pokemon.name}<br></br>
        {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc}/>}
        </>;
  }
  
  export default PokemonCard;

  
  