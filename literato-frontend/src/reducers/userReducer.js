const initialState = {
    currentUser: null,
    error: null,
    logInUserSuccess: false,
    newUserSuccess: false
}
export default (currentState=initialState, action) =>{
    let newState
    switch(action.type){
        case("FETCHED_USER"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: action.payload, error: null}
            )
            break;
        }
        case("FETCHED_USER_ERROR"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: null, error: action.payload}
            )
            break;
        }
        case("FETCHED_USER_LOGIN"):{
            console.log(action.payload)
            newState = Object.assign(
                {},
                currentState,
                {currentUser: action.payload, error: null, logInUserSuccess: true, newUserSuccess: false}
            )
            break;
        }
        case("SIGNUP_ERROR"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: null, error: action.payload}
            )
            break;
        }
        case("SIGNUP"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: action.payload, error: null, newUserSuccess: true, logInUserSuccess: false}
            )
            break;
        }
        case("REMOVE_USER"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: null, error: null, logInUserSuccess: false}
            )
            break;
        }
        default:
        newState = currentState
    }
    return newState
}
