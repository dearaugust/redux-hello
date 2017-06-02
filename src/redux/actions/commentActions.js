import axios from 'axios'

function transData(arr){
  let post1 = arr.filter(value => value.postId !== '2').map(item => {
    return item.commentBody
  })
  let post2 = arr.filter(value => value.postId !== '1').map(item => {
    return item.commentBody
  })
  return {
    1: post1,
    2: post2
  }
}

export function addComment(comment, postId) {
  return dispatch => {
    const data = {
      commentBody: comment,
      postId
    }
    axios.post('http://redux-hello.haoduoshipin.com/comment', data).then(
      dispatch({ type: 'ADD_COMMENT', comment, postId})
    )
  }
}
export function fetchComments() {
  return dispatch => {
    axios.get('http://redux-hello.haoduoshipin.com/comments').then( response => {
      dispatch({type:'LOAD_COMMENTS', comments: transData(response.data.comments)})
    })
  }
}
