import React from 'react';
import PropTypes from 'prop-types'

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.object,
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired
}

export default Pokemon;
