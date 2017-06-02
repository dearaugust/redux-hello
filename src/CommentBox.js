import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment, fetchComments } from './redux/actions/commentActions.js'

class CommentBox extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
componentWillMount(){
  this.props.fetchComments()
}
  handleSubmit(e){
    e.preventDefault();
    const value =this.textInput.value
    // store.dispatch({type:'ADD_COMMENT', comment:value, postId: this.props.id })
    this.props.addComment(this.textInput.value, this.props.id)   // redux-thunk 传过来的
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

export default connect(mapStateToProps, {addComment, fetchComments})(CommentBox)
