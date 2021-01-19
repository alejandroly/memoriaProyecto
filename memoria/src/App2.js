import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import ViewList from './components/etiquetas/ViewList'
import UserForm from './components/etiquetas/UserForm'

class App2 extends Component {
//estado
  state = {
    data:[],
    ruta: 'lista',//cambiamos lista x form
  }
//llamadas a api
  constructor(props){
    super(props)
    console.log(props )


    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => this.setState({ data }))
  }
//métodos

  seleccionaUsuario = id => {
    this.setState({
      ruta:'formulario',
      usuarioSeleccionado:id,
    })
  }
  nuevoUsuario = () => {
    this.setState({
      ruta:'formulario',
      usuarioSeleccionado:''})
  }

  agregarNuevoUsuario = usuario => {
    axios.post('https://jsonplaceholder.typicode.com/users',usuario)
    .then(({data}) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data:newData,
        ruta:'lista',
      })
    })

  }

  actualizarNuevoUsuario = (id,values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,values)
    .then(() => {
      const newData = this.state.data.map(x => x.id === id ? values: x)
      this.setState({
        data: newData,
        ruta:'lista',
      })
    })
  }

  render(){
    const { ruta , data , usuarioSeleccionado} = this.state
    const valoresIniciales = usuarioSeleccionado && data.find(x => x.id === usuarioSeleccionado)
    return (

      <div className="App">
        {ruta === 'lista' && <ViewList
          nuevoUsuario= {this.nuevoUsuario}
          handleClick={this.seleccionaUsuario}
          data={data}/>}
        {ruta === 'formulario' && <UserForm
          valoresIniciales={valoresIniciales || {}}
          handleSubmit={this.agregarNuevoUsuario}
          handleUpdate={this.actualizarNuevoUsuario}/>}
      </div>
    )
  }
}

export default App2;
