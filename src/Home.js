import React, { Component } from 'react'
import PostBody from './PostBody.js'
import { connect } from 'react-redux'
import { fetchComments } from './redux/actions/commentActions'

class Home extends Component {
  componentWillMount(){
    this.props.fetchComments()
  }
  render(){
    let posts = this.props.posts
    let postArr = Object.keys(posts) // ['1', '2']
    let postList = postArr.map((item) => (
      <PostBody key={item} id={item} />
    ))
    return(
      <div className="home">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchComments })(Home)
