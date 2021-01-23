import React, { Component } from  'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Category from './components/Categorias/Category'
import News from './components/Noticias/News'
import Cursos from './components/Cursos/Cursos'
import logo from './logo.svg';
import  { addCategory, selectCategory} from './reducers/Categorias'
import  { addNews , resetNews} from './reducers/Noticias'
import { addCurso , selectCurso , resetCurso} from './reducers/Cursos'
import './App.css';
import { alumnos , encuesta } from './bd-auxiliar/alumnos'
import { reset } from 'redux-form'


const periodo = '2019-1'
const ramos = alumnos.cursos[periodo]


class App extends Component {


  constructor(props){
    super(props)
    const { addCurso } = props
    ramos.forEach( x => {
      addCurso({code:x.code,name:x.name})
    })

  }

  render(){


    // LA PREPARACION /

    const { categories, news, addCategory , selectCategory, selected , addNews , resetNews , addCurso , cursos} = this.props

    return (
      <div className="App">
        <Cursos cursos={cursos}/>
        <Category selectCategory={selectCategory}
                  addCategory={addCategory}
                  categories={categories} />
        <News selectCategory={selected}
              addNews={addNews}
              resetNews={resetNews}
              news={news} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { Categorias : { data: categories , selected}} = state //dentro de categorias, obtiene la propiedad data, y le coloca un 'alias' llamado categories
  const { Noticias : { data: news}} = state //dentro de categorias, obtiene la propiedad data, y le coloca un 'alias' llamado categories
  const { Cursos : { data: cursos}} = state
  const { Ayudantes : { data: ayudantes}} = state
  return {
    categories,
    news: news.filter(x => x.category_id === selected),
    selected,
    cursos,
    ayudantes,
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
  },
  resetNews: () => dispatch(resetNews()),
  addCurso: payload => dispatch(addCurso(payload)),
})


export default connect(mapStateToProps,mapDispatchToProps)(App)
