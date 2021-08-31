import React from 'react';
import Pokemon from './pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pokemon, index) => <Pokemon key = {index} pokemon = {pokemon}/>)
    );
  }
}

export default Pokedex;