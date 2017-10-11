const initialState = {
    deleteBookSuccess: false,
    books: [],
    errors: null,
    newBookSuccess: false
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
                    errors: null
                }
            )
            break
        }
        default:
            newState = currentState
    }
    return newState
}
