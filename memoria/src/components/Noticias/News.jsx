import React, { Component } from 'react'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

export default class News extends Component {

  handleSubmit = payload => {
    const { addNews, selectCategory } = this.props
    addNews({...payload, category_id: selectCategory})
  }

  render () {
    const  { news } = this.props
    return (
      <div>
        <NewsForm  onSubmit={this.handleSubmit}/>
        <NewsList news={news}/>
      </div>

    )
  }
}
