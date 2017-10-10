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
