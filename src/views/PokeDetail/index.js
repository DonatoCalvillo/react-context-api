import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";

const PokeDetail = () => {
    const {id} = useParams();
    const  {getPokemonDetail, 
        pokemonDetail,
        isLoading,
        hasError,
        errorMessage} = useContext(PokemonContext);
    useEffect(()=>{
        // Cada que se cargue la pantalla o cada que cambie el id
        // solicitar el detalle del pokemon
        getPokemonDetail(id).catch();
    },[])

    if(isLoading) return <Loading title= "Cargando pokemones..."/>
    return(
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <>
                <h3>Info en general</h3>
                <p>{`Name: ${pokemonDetail?.name}`}</p>
                <p>{`Weight: ${pokemonDetail?.weight}`}</p>
                <p>{`Height: ${pokemonDetail?.height}`}</p>
                <div>
                    <h3>Habilidades</h3>
                    <PokeStats stats={pokemonDetail?.stats ?? []} />
                </div>
                </>
            )}
        </div>
    );
}

export default PokeDetail;