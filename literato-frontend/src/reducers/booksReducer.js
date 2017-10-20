const initialState = {
    deleteBookSuccess: false,
    userBooks: [],
    books: [],
    errors: null,
    newBookSuccess: false,
    searchResults: [],
    user1Books: [],
    successMessage: ""
}

export default (currentState=initialState, action) =>{
    let newState
    switch(action.type){
      case("TRADED_BOOK"):{
          newState = Object.assign(
              {},
              currentState,
              {
                successMessage: "Trade was complete - Go to dashboard",
              }
          )
          break;
      }
        case("DELETE_BOOK"):{
            newState = Object.assign(
                {},
                currentState,
                {
                    deleteBookSuccess: true,
                    userBooks: action.payload
                }
            )
            break;
        }
        case("LOAD_BOOKS"):{
            newState = Object.assign(
                {},
                currentState,
                {
                    deleteBookSuccess: false,
                    userBooks: action.payload
                }
            )
            break;
        }
        case("LOAD_USER1_BOOKS"):{
            newState = Object.assign(
                {},
                currentState,
                {
                    user1Books: action.payload
                }
            )
            console.log("hello" + action.payload)
            break;
        }
        case("ADD_BOOK_ERROR"):{
            newState = Object.assign(
                {},
                currentState,
                {
                errors: 'Book not added'
                }
            )
            break
        }
        case("ADD_BOOK"):{
            newState = Object.assign(
                {},
                currentState,
                {
                    books: action.payload,
                    newBookSuccess: true,
                    errors: null,
                    searchResults: [],
                    userBooks: action.payload
                }
            )
            break
        }
        case("BOOK_SEARCH"):{
            newState = Object.assign(
                {},
                currentState,
                {
                    searchResults: action.payload,
                    errors: "AHHHH"
                }
            )
            break
        }
        default:
            newState = currentState
    }
    return newState
}
