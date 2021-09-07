import React from 'react'
import PropTypes from 'prop-types'

class Estado extends React.Component {
  createOption = (value, index) => <option value={value} key={index}>{value}</option>
  render () {
    const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    const { id, funcao } = this.props
    return (
      <select id={id} onChange={funcao} className="form-select">
        {estados.map((estado, index) => this.createOption(estado, index))}
      </select>
    )
  }
}

Estado.propTypes = {
  id: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired
}
export default Estado
