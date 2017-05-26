import React, { Component } from 'react'
import store from './redux/stroe.js'
import { connect } from 'react-redux'

class Form extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const values = this.textInput.value
    let todo = {title:values,active:false}
    store.dispatch({type:'ADD_TODO', todo})
    this.refs.todoFrom.reset()  //输入后清空
  }
  render(){
    return(
      <div className="form-wrap" >
        <form ref="todoFrom" onSubmit={this.handleSubmit}>
            <input type="text" ref={(value) => (this.textInput) = value}/>
            <button className='submit-btn'><img style={{width:'50px'}}src={require('./plus.svg')} alt=""/></button>
        </form>
        <button style={{margin:'10px'}}><img src={require('./all.svg')} alt=""/></button>
        <button style={{margin:'10px'}}><img src={require('./duigou.svg')} alt=""/></button>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

export default connect(mapStateToProps)(Form)
