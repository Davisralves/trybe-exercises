import Form from './form';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email:'',
      cpf: '',
      endereço:'',
      cidade: '',
      logadouro: '',
      curriculo: '',
      cargo: '',
      descricaoDoCargo:'',
      dataInicial: '',
    };
  }
  render() {
    return (
      <Form />
    );
  }

}


export default App;

// Introduzir EstLint. 
// Fazer formulario responsivo
// Fazer formulario com validações
// colocar erros na tela
// Usar framework