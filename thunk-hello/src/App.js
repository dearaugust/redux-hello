import React, { Component } from 'react';
import './App.css';
import store from './redux/store.js'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchComments } from './redux/actions/commentsActions.js'

class App extends Component {
  componentWillMount() {
    this.props.fetchComments()
  }
  render() {
    console.log(this.props);

    return (
      <div className="App">
        {this.props.comments.length}
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  comments: state
})

export default
connect(mapStateToProps, {fetchComments})(App)
