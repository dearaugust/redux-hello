import { combineReducers } from 'redux'

let todos = [{title:'吃饭', active: true }, {title:'睡觉', active: true }, {title:'做梦' ,active: false }]
function todoReducer( state = todos,action ){
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, action.todo ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos: todoReducer
})

export default rootReducer
