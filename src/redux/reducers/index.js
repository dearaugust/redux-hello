import { combineReducers } from 'redux'

// let newState = {
//   comments: ['hello', 'word'],
//   likes: 0
// }

let comments = ['hello', 'word']
function commentReducer( state = comments,action ){
  switch (action.type) {
    case 'ADD_COMMENT':
      return [ ...state, action.comment ]
    default:
      return state
  }
}

let likes = 0
function likeReducer( state = likes,action ){
  switch (action.type) {
    case 'ADD_LIKE':
      return state + 1
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
  likes: likeReducer
})

export default rootReducer
