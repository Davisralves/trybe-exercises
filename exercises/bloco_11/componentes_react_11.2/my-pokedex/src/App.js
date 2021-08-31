import './App.css';
import React from 'react';
import Pokedex from './pokedex';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>My pokedex</h1>
        <section className = 'pokedexSection'>
          <Pokedex/>
        </section>
      </main>
    );
  }
}

export default App;
