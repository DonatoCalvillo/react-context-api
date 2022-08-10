import { Link } from "react-router-dom";

const PokemonListItem = ({name, url, id}) => {
    const getId =  () => url.split("/")[6];

    return(
        <>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}>Mas detales</Link>
            </button>
        </>
    );
}

export default PokemonListItem;