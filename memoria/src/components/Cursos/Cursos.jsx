import React, { Component } from 'react'
import CursosCard from './CursosCard'

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}



// ESTE COMPONENTE ES UN CONJUNTO DE CURSOS
export default class Cursos extends Component {
  render () {
    const  { cursos } = this.props
    return (
      <div style={styles}>
        {(cursos.filter(x => x.name != 'Defecto' )).map(x => <CursosCard curso={x} key={x.id}/>)}
      </div>

    )
  }
}
