var apiUrl
if(process.env.NODE_ENV === 'production'){
  apiUrl = ""
} else {
  apiUrl = "http://localhost:3000"
}

export function viewUserBooks(request) {
    return ((dispatch) => {
      dispatch (loadUser1Books(apiUrl, request.user1Id))
      dispatch({
          type: 'VIEW_REQUEST',
          payload: request
      })
    })
}

export function handleCheckLogin(apiUrl){
    return ((dispatch)=> {
        var authToken = localStorage.getItem('authToken');
        if(authToken){
            fetch(`${apiUrl}/user`,
            {
                body: JSON.stringify({authToken: authToken}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST"
            }
            )
            .then((rawResponse)=>{
                return rawResponse.json()
            })
            .then((parsedResponse)=>{
                if(parsedResponse.errors){
                    dispatch({
                        type: 'FETCHED_USER_ERROR',
                        payload: parsedResponse.errors
                    })
                }else{
                    dispatch({
                        type: 'FETCHED_USER',
                        payload: parsedResponse.user
                    })
                }
                return parsedResponse
            })
            .then((parsedResponse) => {
                if(parsedResponse.user){
                    dispatch (loadBooks(apiUrl, parsedResponse.user.id))
                    dispatch (loadRequests(apiUrl, parsedResponse.user.id))
                }
            })
        } else{
          dispatch({
            type: 'FETCHED_USER_ERROR',
            payload: "Please Log In"
          })
        }
    })
}

function loadRequests(url, id) {
    return ((dispatch) => {
        fetch(`${url}/requests/${id}`)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((parsedResponse) => {
            dispatch({
                type: 'FETCHED_REQUESTS',
                payload: parsedResponse.requests
            })
        })
    })
}

function loadBooks(url, id) {
    return ((dispatch) => {
        fetch(`${url}/books/${id}`)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((parsedResponse) => {
            dispatch({
                type: 'LOAD_BOOKS',
                payload: parsedResponse.books
            })
        })
    })
}

function loadUser1Books(url, id) {
    return ((dispatch) => {
        fetch(`${url}/books/${id}`)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((parsedResponse) => {
            dispatch({
                type: 'LOAD_USER1_BOOKS',
                payload: parsedResponse.books
            })
        })
    })
}
export function handleUserLogin(apiUrl, params){
    return ((dispatch) => {
        fetch(`${apiUrl}/login`,
        {
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        })
        .then((rawResponse)=>{
            return rawResponse.json()
        })
        .then((parsedResponse)=>{
            if(parsedResponse.errors){
                dispatch({
                    type: 'FETCHED_USER_ERROR',
                    payload: parsedResponse.errors
                })
            }else{
                localStorage.setItem('authToken', parsedResponse.user.authToken);
                dispatch({
                    type: 'FETCHED_USER_LOGIN',
                    payload: parsedResponse.user
                })
            }
        })
    })
}

export function handleNewUser(apiUrl, params){
    return ((dispatch) => {
        fetch(`${apiUrl}/signup`,
        {
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        })
        .then((rawResponse)=>{
            return rawResponse.json()
        })
        .then((parsedResponse)=>{
            if(parsedResponse.errors){
                dispatch({
                    type: "SIGNUP_ERROR",
                    payload: parsedResponse.errors
                })
            }else{
                dispatch({
                    type: "SIGNUP",
                    payload: parsedResponse.user
                })
            }
        })
    })
}

export function handleUserLogout() {
    return ((dispatch) => {
        localStorage.removeItem('authToken');
        dispatch({
            type: "REMOVE_USER"
        })
    })
}
