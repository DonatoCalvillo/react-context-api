import { useContext } from "react";
import PokemonContext from "../../context/pokemons";

const FourOFour = () =>  {
    const { pokemons } = useContext(PokemonContext);
    console.log(pokemons);
    
    return(
        <div>
            404 NOT FOUND
        </div>
    );
}

export default FourOFour;