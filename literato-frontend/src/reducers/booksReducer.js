const initialState = {
    deleteBookSuccess: false,
    books: []
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
        default:
            newState = currentState
    }
    return newState
}
