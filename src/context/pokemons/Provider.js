import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api"

const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasError, setHasError] = useState(false)


    const getPokemons = async () =>{
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");

            const pokemonsResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
            });
            setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemons([]);
            setHasError(true);
            setErrorMessage("Algo ha pasado...");
        } finally{
            setIsLoading(false);
        }
    }

    const getPokemonDetail = async(id) =>{
        if(!id) Promise.reject("Id es requerido");
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");

            const pokemonDetailResult = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            });
            setPokemonDetail(pokemonDetailResult);
        } catch (error) {
            setHasError(true);
            setPokemonDetail({});
            setErrorMessage("Algo ha pasado...");
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <PokemonContext.Provider value={{ 
            getPokemons, 
            pokemons, 
            getPokemonDetail,
            pokemonDetail,
            isLoading,
            errorMessage,
            hasError
            }}>
            {children}
        </PokemonContext.Provider> 
    );
};

export default PokemonProvider;