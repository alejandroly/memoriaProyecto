import React, { Component } from 'react'
import { Card , Button } from 'react-bootstrap'

export default class CursosCard extends Component {


  render(){
    const  { curso } = this.props

    return (

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{curso.name}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    )
  }

}
