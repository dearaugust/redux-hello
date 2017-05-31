import React, { Component } from 'react'

import PostBody from './PostBody.js'
import CommentBox from './CommentBox.js'

const Post = ({ match }) => (
  <div>
    <div className='top clearfix'>
      {/* <PostBody comments={this.state.comments}/> */}
      <PostBody id={match.params.id}/>
    </div>
    <div className='buttom clearfix'>
      {/* <CommentBox comments={this.state.comments} addComment={this.addComment}/> */}
      <CommentBox id={match.params.id}/>
    </div>
  </div>
)

export default Post
