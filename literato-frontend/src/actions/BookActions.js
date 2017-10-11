
export function deleteBook(id) {
    return ((dispatch) => {
        fetch('http://localhost:3000/books/destroy',
            {
                body: JSON.stringify({id: id}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((parsedResponse) => {
            dispatch({
                type: 'DELETE_BOOK',
                payload: parsedResponse.books
            })
        })
    })
}

export function loadBooks(url) {
    return ((dispatch) => {
        fetch(`${url}/books`)
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

export function handleNewBook(params){
    return ((dispatch) => {
        fetch('http://localhost:3000/books',
            {
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((parsedResponse) => {
            if(parsedResponse.errors) {
                dispatch({
                    type: 'ADD_BOOK_ERROR',
                    payload: parsedResponse.errors
                })
            }else{
                dispatch({
                    type: 'ADD_BOOK',
                    payload: parsedResponse.books
                })
            }
        })
    })

}
