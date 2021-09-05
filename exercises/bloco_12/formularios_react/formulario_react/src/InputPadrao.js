import React from 'react'

class InputPadrao extends React.Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { funcao, type, maxLength, placeholder, className, id } = this.props
    return (
      <input type={type} maxLength={maxLength} placeholder={placeholder} className={className} id={id} onChange={funcao}></input>
    )
  }
}

export default InputPadrao
