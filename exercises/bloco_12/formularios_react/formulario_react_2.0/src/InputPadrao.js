import React from 'react'
import PropTypes from 'prop-types'

class InputPadrao extends React.Component {
  render () {
    const { funcao, type, maxLength, placeholder, className, id } = this.props
    return (
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">{placeholder}:</span>
  <input type={type} maxLength={maxLength} className={className} id={id} onChange={funcao}></input>
</div>
    )
  }
}

InputPadrao.propTypes = {
  funcao: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired
}

InputPadrao.defaultProps = {
  maxLength: '',
  placeholder: '',
  className: ''
}
export default InputPadrao
