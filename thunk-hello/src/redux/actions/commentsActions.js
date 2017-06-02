import axios from 'axios'

const fetchComments = () => (
  dispatch => {
    axios.get('http://redux-hello.haoduoshipin.com/comments')
      .then(res => dispatch({ type: 'LOAD_COMMENTS', comments: res.data.comments}))
  }
)

export { fetchComments }
