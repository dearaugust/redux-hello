import React from 'react'

class Child extends React.Component {
  render() {
    return(
      <button onClick={this.props.changeParentState}>Child Button</button>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.changeBgc = this.changeBgc.bind(this)
  }

  state = {
    color: 'red'
  }

  changeBgc() {
    this.setState({
      color: 'green'
    })
  }
  render() {
    return(
      <div style={{'color': this.state.color}}>
        <div>App</div>
        <Child  changeParentState={this.changeBgc} backGround={this.state.color} />
      </div>
    )
  }
}

export default App
