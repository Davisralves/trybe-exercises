import React from 'react'
import InputPadrao from './InputPadrao'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      logadouro: '',
      curriculo: '',
      cargo: '',
      descricaoDoCargo: '',
      dataInicial: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event) => {
    const { value, id } = event.target
    this.setState({ [id]: value })
  }

  render () {
    return (
      <form>
      <fieldset>
      <InputPadrao type="text" maxLength="40" placeholder="Nome" className="dados" id="nome" funcao={this.handleClick}/>
      <InputPadrao type="email" maxLength="50" placeholder="E-mail" className="dados" id="email" funcao={this.handleClick}/>
        <input type="text" maxLength="11" placeholder="Cpf" className="dados" ></input>
        <input type="text" maxLength="200" placeholder="Endereço" className="dados" ></input>
        <input type="text" maxLength="28" placeholder="Cidade" className="dados" ></input>
        <p>
          Estado:
          <select>
          </select>
        </p>
        <div>
          <span>logadouro:</span>
            <label forhtml="casa">
              <span>Casa</span>
              <input type="radio" id="casa" name="logadouro"></input>
            </label>
            <label forhtml="apartamento">
              <span>Apartamento</span>
              <input type="radio" id="apartamento" name="logadouro"></input>
            </label>
    </div>
      </fieldset>
      <fieldset>
        <p>Resumo do curriculo:</p>
        <textarea name="Resumo" id="curriculo" cols="100" rows="10" maxLength="1000" ></textarea>
        <p>Cargo:
        <input type="text" maxLength="40" ></input>
      </p>
      <p>Descrição do cargo:
        <input type="text" maxLength="500" id="descricao de cargo" ></input>
      </p>
      <p>
        Data de inicio:
        <input type="date" ></input>
      </p>
      <button id="button" type="submit">Enviar</button>

      </fieldset>
    </form>
    )
  }
}

export default App

// Fazer formulario responsivo
// Fazer formulario com validações
// colocar erros na tela
