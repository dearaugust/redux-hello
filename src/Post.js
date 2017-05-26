import React, { Component } from 'react'

import PostBody from './PostBody.js'
import CommentBox from './CommentBox.js'

const Post = () => (
  <div>
    <div className='top clearfix'>
      {/* <PostBody comments={this.state.comments}/> */}
      <PostBody />
    </div>
    <div className='buttom clearfix'>
      {/* <CommentBox comments={this.state.comments} addComment={this.addComment}/> */}
      <CommentBox />
    </div>
  </div>
)

export default Post
