import React, { Component } from 'react'
import store from './redux/store.js'

import { connect } from 'react-redux'

class PostBody extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    store.dispatch({type:'ADD_LIKE'}) //给赋予属性
  }
  render(){
    console.log(this.props);
    return(
      <div className='post-body'>
        <h1 className="title">Holle Word</h1>
        <div className="likes-num num" onClick={this.handleClick}>
          {this.props.likes} 赞
        </div>
        <div className="comment-num num">
          {this.props.comments.length} 评论
          {/* <span>{this.state.num}</span> */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    comments: state.comments,
    likes: state.likes
  }
)

export default connect(mapStateToProps)(PostBody)
