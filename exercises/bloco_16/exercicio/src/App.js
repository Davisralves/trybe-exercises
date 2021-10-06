import './App.css';
import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
export default class App extends Component {
  render() {
      const ESTADO_INICIAL_1 = {
        nome: 'Rodrigo',
        sobrenome: 'Santos da Silva',
        endereco: 'Rua Soldado Mathias, 765',
        cidade: 'Belo Horizonte',
      };

      const ESTADO_INICIAL_2 = {
        nome: 'Bruna',
        sobrenome: 'Santana Oliveira',
        endereco: 'Rua Holanda, 332',
        cidade: 'São Paulo',
      };

      const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
        switch (action.type) {
          case 'first action':
            return {
              ...state,
              nome: 'Davi',
              endereco: 'Não existe',
              cidade: 'Recife',
            }
          default:
            return state;
        }
      };

      const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
        switch (action.type) {
          case 'first action':
            return {
              ...state,
              nome: 'Vitória',
              cidade: 'recife',
              endereco:'com Davi',
            }
          default:
            return state;
        }
      };
      const combinedReducers = combineReducers({
        meuPrimeiroReducer,
        meuSegundoReducer
      });
      var store =  createStore(combinedReducers);
      console.log(store.getState());
      const tryDispath = () => {
        console.log(store.getState());
        store.dispatch({type: 'first action'});
        console.log(store.getState());
      }

    return (

      <div>
        <div id="container">
          <h1>Informações do primeiro Reducer:</h1>
          <p>Nome: <span id="nome-1">Rodrigo</span></p>
          <p>Sobrenome: <span id="sobrenome-1">Santos da Silva</span></p>
          <p>Endereço: <span id="endereco-1">Rua Soldado Mathias, 765</span></p>
          <p>Cidade: <span id="cidade-1">Belo Horizonte</span></p>
        </div>
        <div id="container">
          <h1>Informações do segundo Reducer:</h1>
          <p>Nome: <span id="nome-2">Bruna</span></p>
          <p>Sobrenome: <span id="sobrenome-2">Santana Oliveira</span></p>
          <p>Endereço: <span id="endereco-2">Rua Holanda, 332</span></p>
          <p>Cidade: <span id="cidade-2">São Paulo</span></p>
          <button onClick={ tryDispath }>Alterar dados</button>
        </div>
      </div>
    );
  }
}
