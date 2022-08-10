import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import PokemonList from "./Components/PokemonList";
import ErrorMessage from "../../components/ErrorMessage";

const Home = () => {
    const {getPokemons,
        pokemons, 
        isLoading,
        hasError,
        errorMessage} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
        console.log(pokemons);
    }, []);

    if(isLoading) return <Loading title="Cargando pokemon..."/>

    return (
        <>  
            {hasError ? <ErrorMessage message={errorMessage}/> : <PokemonList pokemons={pokemons}/>}
        </>
    );
        

}

export default Home;