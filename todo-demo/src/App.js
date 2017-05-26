import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/stroe.js'

import Post from './Post.js'
import Form from './Form.js'

class App extends Component {
  render() {
    return (
      <div className="my-wrap">
        <Provider store={store}>
          <div>
            <h1>TODO</h1>
            <Post />
            <Form />
          </div>
        </Provider>
      </div>
    )
  }
}

export default App
