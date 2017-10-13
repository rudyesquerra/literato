import userReducer from './userReducer.js'
import {combineReducers} from 'redux'
import booksReducer from './booksReducer.js'

  export default combineReducers({
    user: userReducer,
    books: booksReducer,
  })
