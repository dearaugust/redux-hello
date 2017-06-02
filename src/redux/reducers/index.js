import { combineReducers } from 'redux'
// let newState = {
//   comments: ['hello', 'word'],
//   likes: 0
// }

let comments = {
   1: [],
   2: []
}
function commentReducer( state = comments,action ){
  switch (action.type) {
    case 'ADD_COMMENT':
      return { ...state, [action.postId]:[...state[action.postId], action.comment] }
      // console.log( 'ADD_COMMENT', action);
      // return state
    case 'LOAD_COMMENTS':
      return action.comments
    default:
      return state
  }
}

const posts = {
  1: { title:'redux-hello', likes: 8},
  2: { title:'hello-word',likes: 1}
}
function postReducer( state = posts,action ){
  switch (action.type) {
    case 'ADD_LIKE':
      let id = action.postId
      return {
        ...state,[id]:{...state[id], likes: state[id].likes + 1}
      }
    default:
      return state
  }
}


// 写一起
// function rootReducer(state = newState, action) {
//   console.log(action);
//
//   var copyState = Object.assign({},state)
//
//   switch (action.type) {
//     case 'ADD_COMMENT':
//       // copyState.comments = [...copyState.comments,action.comment]
//       return {...state, comments: [...state.comments,action.comment] }
//     case 'ADD_LIKE':
//       // copyState.likes = copyState.likes + 1
//       return {...state, likes: state.likes + 1 }
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  comments: commentReducer,
  posts: postReducer,
})

export default rootReducer
