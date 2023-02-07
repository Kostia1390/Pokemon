import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FullPokemon = () => {
  const [pokemon, setPokemon] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPokemon() {
      const { data } = await axios.get('https://63dbe3d4c45e08a043508dff.mockapi.io/items/' + id);
      setPokemon(data);
    }
    fetchPokemon();
  }, []);

  if (!pokemon) {
    return 'Loading...';
  }

  return (
    <div className="pokemon-page">
      <img className="pokemon-page__src" src={pokemon.imageUrl} alt="Pokemon" />
      <h2 className="pokemon-page__h2"> {pokemon.title}</h2>
      <h5 className="pokemon-page__info">{pokemon.info}</h5>
      <div class="cart cart--empty">
        <Link to="/" class="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </div>
  );
};

export default FullPokemon;
