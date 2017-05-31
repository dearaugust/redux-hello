import React, { Component } from 'react'
import store from './redux/store.js'

import { connect } from 'react-redux'

class CommentBox extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const value =this.textInput.value
    store.dispatch({type:'ADD_COMMENT', comment:value, postId: this.props.id })
    this.refs.commentForm.reset()  //输入后清空
    // this.props.addComment(content)
  }
  render(){
    console.log(this.props);
    // console.log(store.getState());
    // let comments = store.getState()
    let commentList = this.props.comments[this.props.id].map( (item) => (
      <div className="comment" key={Math.random()} style={{borderBottom:'1px solid #ccc'}}>{item}</div>
    ))
    return(
      <div className='comment-box'>
        {commentList}

        <form ref="commentForm" onSubmit={this.handleSubmit} className="comment-form">
          <input ref={(value) => {this.textInput = value}} type="text" className='input'/>
          <button type="submit" className='submit-btn' >提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    comments: state.comments
  }
)

export default connect(mapStateToProps)(CommentBox)
