
type pokemon = {
    name: string;
    imgSrc?: string;
    alt?: string; 
    }


type NavBarProps = {
    setPokemonName: (name: string) => void;
    pokemonList: pokemon[];
    }
    

function NavBar({ setPokemonName, pokemonList } : NavBarProps) {
    
    return <nav>
        {pokemonList.map((onePokemon) => (
        <ul className="list">
        <li key={onePokemon.name}>
          <button onClick={() => setPokemonName(onePokemon.name)}>{onePokemon.name}</button>
        </li>
        </ul>
      ))}</nav>;
  }
  
  export default NavBar;