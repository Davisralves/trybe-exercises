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
        <fieldset id="primeiraParte">
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
              <span>Logadouro:</span>
                <label forhtml="casa" className="form-check">
                  <span>Casa</span>
                  <input value="casa" type="radio" name="casa" id="logadouro" className="form-check-input" onChange={this.handleClick}></input>
                </label>
                <label forhtml="apartamento" className="form-check">
                  <span>Apartamento</span>
                  <input value="apartamento" type="radio" id="logadouro" name="casa" className="form-check-input" onChange={this.handleClick}></input>
                </label>
        </div>
      </fieldset>
        <fieldset>
          <h6>Resumo do curriculo:</h6>
          <textarea className="form-control" name="Resumo" id="curriculo" maxLength="1000" onChange={this.handleClick}></textarea>
          <br/>
          <p>Cargo:
          <input type="text" id="cargo" maxLength="40" className="form-control" onChange={this.handleClick}></input>
        </p>
        <p>Descrição do cargo:
          <input type="text" maxLength="500" id="descricaoDoCargo" className="form-control" onChange={this.handleClick}></input>
        </p>
        <p>
          Data de inicio:
          <input type="date" id="dataInicial" className="form-control" onChange={this.handleClick}></input>
        </p>
        <button type="submit" className="btn btn-primary">Enviar</button>

        </fieldset>
    </form>
    )
  }
}

export default App

// Fazer formulario responsivo
// Fazer formulario com validações
// colocar erros na tela
