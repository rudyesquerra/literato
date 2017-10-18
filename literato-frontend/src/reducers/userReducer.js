const initialState = {
    currentUser: null,
    error: null,
    logInUserSuccess: false,
    newUserSuccess: false,
    requests: [],
    currentRequest: null,
    loading: true
}
export default (currentState=initialState, action) =>{
    let newState
    switch(action.type){
      case("VIEW_REQUEST"):{
          newState = Object.assign(
              {},
              currentState,
              {currentRequest: action.payload, loading: false}
          )
          break;
      }
        case("FETCHED_USER"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: action.payload, error: null, loading: false}
            )
            break;
        }
        case("FETCHED_USER_ERROR"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: null, error: action.payload,loading: false}
            )
            break;
        }
        case("FETCHED_USER_LOGIN"):{
            console.log(action.payload)
            newState = Object.assign(
                {},
                currentState,
                {currentUser: action.payload, error: null, logInUserSuccess: true, newUserSuccess: false, loading: false}
            )
            break;
        }
        case("SIGNUP_ERROR"):{
            newState = Object.assign(
                {},
                currentState,
                {currentUser: null, error: action.payload, loading: false}
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
                {currentUser: null, error: null, logInUserSuccess: false, loading: false}
            )
            break;
        }
        case("FETCHED_REQUESTS"):{
            newState = Object.assign(
                {},
                currentState,
                {requests: action.payload, loading: false}
            )
            break;
        }
        default:
        newState = currentState
    }
    return newState
}
