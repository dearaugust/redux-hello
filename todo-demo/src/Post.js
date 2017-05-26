import React, { Component } from 'react'
// import store from './redux/store.js'

import { connect } from 'react-redux'

class Post extends Component {

  render(){
    console.log(this.props);
    let todoList = this.props.todos.map( ( item, index ) => (
      <div className="todo" key={Math.random()}>
        <span>{item.title}</span>
        <span><img src={ item.active ? require('./duigou.svg') : null } alt=""/></span>
      </div>
    ))
    return(
      <div>
        {todoList}
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

export default connect(mapStateToProps)(Post)
