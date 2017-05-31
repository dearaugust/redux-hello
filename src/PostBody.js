import React, { Component } from 'react'
import store from './redux/store.js'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class PostBody extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    store.dispatch({type:'ADD_LIKE', postId: this.props.id}) //给赋予属性
  }
  render(){
    console.log(this.props);
    return(
      <div className='post-body'>
        <Link to={`/post/${this.props.id}`} className="title">
          {this.props.posts[this.props.id].title}
        </Link>
        <div className="likes-num num" onClick={this.handleClick}>
          {this.props.posts[this.props.id].likes} 赞
        </div>
        <div className="comment-num num">
          {this.props.comments[this.props.id].length} 评论
          {/* <span>{this.state.num}</span> */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    comments: state.comments,
    posts: state.posts
  }
)

export default connect(mapStateToProps)(PostBody)
