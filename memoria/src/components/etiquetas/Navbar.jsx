import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

const styles = {
  marginBottom: '40px'
}


export default class Nav extends Component{
  render(){
    const { nuevoUsuario } = this.props
    return(
      <Navbar style={styles} bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src='/logo192.png'
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    )
  }
}
