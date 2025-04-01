type pokemonProps = {
    name: string;
    imgSrc?: string; 
}

function PokemonCard({name, imgSrc} : pokemonProps) {
    return <>
        {name}<br></br>
        {imgSrc === undefined ? <p>???</p> : <img src={imgSrc}/>}
        </>;
  }
  
  export default PokemonCard;

  
  