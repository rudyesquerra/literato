const initialState = {
    deleteBookSuccess: false,
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
                    books: action.payload
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
                    books: action.payload
                }
            )
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
                    searchResults: []
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
