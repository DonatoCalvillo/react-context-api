import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemons }) => {

    return(
        <div>
            {pokemons?.map((pokemon,index) => <PokemonListItem key={index} {...pokemon}/>)}
        </div>
    );
}

export default PokemonList;