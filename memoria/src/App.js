import React, { Component } from  'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Category from './components/Categorias/Category'
import News from './components/Noticias/News'
import logo from './logo.svg';
import  { addCategory, selectCategory } from './reducers/Categorias'
import  { addNews } from './reducers/Noticias'
import './App.css';
import { alumnos , encuesta } from './bd-auxiliar/alumnos'
import { reset } from 'redux-form'


class App extends Component {

  render(){
    const { categories, news, addCategory , selectCategory, selected , addNews } = this.props
    return (
      <div className="App">
        <div> HOLA ALEJANDRO </div>
        <Category selectCategory={selectCategory}
                  addCategory={addCategory}
                  categories={categories} />
        <News selectCategory={selected}
              addNews={addNews}
              news={news} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { Categorias : { data: categories , selected}} = state //dentro de categorias, obtiene la propiedad data, y le coloca un 'alias' llamado categories
  const { Noticias : { data: news}} = state //dentro de categorias, obtiene la propiedad data, y le coloca un 'alias' llamado categories
  return {
    categories,
    news: news.filter(x => x.category_id === selected),
    selected,
  }
}

const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))//funciona como promesa
  },
  selectCategory: payload => dispatch(selectCategory(payload)),
  addNews: payload => {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(App)
