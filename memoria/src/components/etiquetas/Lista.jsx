import React, { Component } from 'react'

export default class Lista extends Component {
  handleClick = id => e => { //CURRYNG ! OBLIGACION USARLO Y APRENDERLO INTUITIVAMENTE
    const {handleClick} = this.props
    handleClick(id)//este handleclick corresponde a un metodo padre, donde podemos enviar el id
  }
  render(){
    const {data} = this.props
    return(
      <ul>
        {data.map(x =>
          <li key={x.id}>{x.name}<button onClick={this.handleClick(x.id)}>Editar</button></li>
        )}
      </ul>
    )
  }
}
