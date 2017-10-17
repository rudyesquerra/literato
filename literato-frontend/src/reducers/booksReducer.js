const initialState = {
    deleteBookSuccess: false,
    userBooks: [],
    books: [],
    errors: null,
    newBookSuccess: false,
    searchResults: []
}

export default (currentState=initialState, action) =>{
    let newState
    switch(action.type){
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
