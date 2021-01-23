import React, { Component } from 'react'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

// ESTE COMPONENTE ES UN CONJUNTO DE CURSOS
export default class Cursos extends Component {
  render () {
    const  { categories, addCategory , selectCategory} = this.props
    return (
      <div>
        <CategoryForm  onSubmit={addCategory}/>
        <CategoryList  selectCategory={selectCategory}
                       categories={categories}/>
      </div>

    )
  }
}
