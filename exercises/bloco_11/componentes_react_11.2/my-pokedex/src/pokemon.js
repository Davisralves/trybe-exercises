import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, moreInfo} = this.props.pokemon;
    return (
      <section className = 'pokemon'>
        <div>
          <div>Name: { name }</div>
          <div> Type: { type }</div>
          <div>Average Weight: {averageWeight.value} { averageWeight.measurementUnit }</div>
        </div>
        <div>
          <img src = { image } alt = 'Pokemon'></img>
          <div id = 'description'> <a href = { moreInfo }>More Info</a></div>
        </div>
      </section>
    );
  }
}

export default Pokemon;
