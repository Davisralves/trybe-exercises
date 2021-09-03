import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form>
          <fieldset>
            <input type="text" maxlength="40" placeholder="Nome" class="dados" ></input>
            <input type="email" maxlength="50" placeholder="E-mail" class="dados" ></input>
            <input type="text" maxlength="11" placeholder="Cpf" class="dados" ></input>
            <input type="text" maxlength="200" placeholder="Endereço" class="dados" ></input>
            <input type="text" maxlength="28" placeholder="Cidade" class="dados" ></input>
            <p>
              Estado:
              <select>
              </select>
            </p>
            <div>
              <span>logadouro:</span>
                <label forHtml="casa">
                  <span>Casa</span>
                  <input type="radio"id="casa" name="logadouro"></input>
                </label>
                <label forHtml="apartamento">
                  <span>Apartamento</span>
                  <input type="radio" id="apartamento" name="logadouro"></input>
                </label>
        </div>
          </fieldset>
          <fieldset>
            <p>Resumo do curriculo:</p>
            <textarea name="Resumo" id="curriculo" cols="100" rows="10" maxlength="1000" ></textarea>
            <p>Cargo:
            <input type="text" maxlength="40" ></input>
          </p>
          <p>Descrição do cargo:
            <input type="text" maxlength="500" id="descricao de cargo" ></input>
          </p>
          <p>
            Data de inicio:
            <input type="date" ></input>
          </p>
          <button id="button" type="submit">Enviar</button>
    
          </fieldset>
        </form>
      );
  }
}

export default Form;
