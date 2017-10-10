import userReducer from './userReducer.js'
import booksReducer from './booksReducer'
  import {combineReducers} from 'redux'

  export default combineReducers({
    user: userReducer,
    books: booksReducer
  })
