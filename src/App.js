import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import './main.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import Home from './Home.js'
import Post from './Post.js'

class App extends Component {
  // constructor() {
  //   super()
  //   this.addComment = this.addComment.bind(this)
  // }
  // state = {
  //   comments: ['hello', 'word']
  // }
  // addComment(newComment) {
  //  this.setState({
  //    comments: [...this.state.comments, newComment] //保存之前改动,新增
  //  })
  // }
  render() {
    return (
      <Provider store={store}>
        {/* <div className="back-home">HOME</div> */}
        {/* <div className='top clearfix'> */}
          {/* <PostBody comments={this.state.comments}/> */}
          {/* <PostBody /> */}
        {/* </div> */}
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Post/:id' component={Post}/>
          </div>
        </BrowserRouter>

        {/* <div className='buttom clearfix'> */}
          {/* <CommentBox comments={this.state.comments} addComment={this.addComment}/> */}
          {/* <CommentBox /> */}
        {/* </div> */}
      </Provider>
    )
  }
}

export default App
