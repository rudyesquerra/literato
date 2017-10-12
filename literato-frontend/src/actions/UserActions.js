

export function handleCheckLogin(apiUrl){
    return ((dispatch)=> {
        var userEmail = localStorage.getItem('userEmail');
        if(userEmail){
            fetch(`${apiUrl}/user`,
            {
                body: JSON.stringify({email: userEmail}),
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
            })
        }
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
                localStorage.setItem('userEmail', parsedResponse.user.email);
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
