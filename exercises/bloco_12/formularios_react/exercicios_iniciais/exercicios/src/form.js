import React from 'react';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      nome:'',
      idade:0,
      text:'',
      select:''
    };
    this.pickName = this.pickName.bind(this);
  }

  pickName = (event) => this.setState({ nome: event.target.value });
  pickAge = (event) => this.setState({ idade: event.target.value });
  pickText = (event) => this.setState( {text: event.target.value });
  pickSelect = (event) => this.setState( {select: event.target.value });

  render() {
    return (
      <form>
        <select name="select" onChange={this.pickSelect}>
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
      </select>
        <input type="text" placeholder="Nome" value={this.state.nome} onChange={this.pickName}></input>
        <input type="number" placeholder="idade" value={this.state.idade} onChange={this.pickAge}></input>
        <textarea value={this.state.text} onChange={this.pickText}></textarea>
      </form>
    );
    }
}

export default Form;