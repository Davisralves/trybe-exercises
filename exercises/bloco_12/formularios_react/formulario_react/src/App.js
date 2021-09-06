import React from 'react'
import InputPadrao from './InputPadrao'
import Estado from './Estado'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
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
        <fieldset className="primeiraParte">
          <InputPadrao type="text" maxLength="40" placeholder="Nome" className="form-control" id="nome" funcao={this.handleClick}/>
          <InputPadrao type="email" maxLength="50" placeholder="E-mail" className="form-control" id="email" funcao={this.handleClick}/>
          <InputPadrao type="text" maxLength="11" placeholder="Cpf" className="form-control" id="cpf" funcao={this.handleClick}/>
          <InputPadrao type="text" maxLength="200" placeholder="Endereço" className="form-control" id="endereço" funcao={this.handleClick}/>
          <InputPadrao input type="text" maxLength="28" placeholder="Cidade" className="form-control" id="cidade" funcao={this.handleClick}/>
            <p>
              Estado:
              <Estado id="estado" funcao={this.handleClick} />
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
