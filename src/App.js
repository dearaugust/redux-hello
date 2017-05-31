import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './main.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import Home from './Home.js'
import Post from './Post.js'

const NoMatch = () => (
  <h1 style={{textAlign:'center'}}>404</h1>
)
const Header = () => (
  <Link className="back-home" to="/">Home</Link>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div className="back-home">HOME</div> */}
        {/* <div className='top clearfix'> */}
          {/* <PostBody comments={this.state.comments}/> */}
          {/* <PostBody /> */}
        {/* </div> */}
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/post/:id' component={Post} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        {/* <div className='buttom clearfix'> */}
          {/* <CommentBox comments={this.state.comments} addComment={this.addComment}/> */}
          {/* <CommentBox /> */}
        {/* </div> */}
      </Provider>
    )
  }
}

export default App
