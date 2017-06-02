import { createStore, applyMiddleware } from 'redux'
import commentReducer from './reducers'
import thunk from 'redux-thunk'

let store = createStore(commentReducer, applyMiddleware(thunk))

export default store
