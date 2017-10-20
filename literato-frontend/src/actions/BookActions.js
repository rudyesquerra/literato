var apiUrl
if(process.env.NODE_ENV === 'production'){
  apiUrl = ""
} else {
  apiUrl = "http://localhost:3000"
}

export function tradeBook(request, bookId){
  return ((dispatch) => {
    fetch(`${apiUrl}/requests/${request.id}`,
      {
          body: JSON.stringify({book1Id: bookId}),
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'PUT'
      }).then((rawResponse) => {
          console.log(rawResponse)
          return rawResponse.json()
      })
      .then((parsedResponse) => {
          dispatch({
              type: 'TRADED_BOOK',
              payload: parsedResponse.request
          })
      })
  })
}
export function deleteBook(id) {
    return ((dispatch) => {
        fetch(`${apiUrl}/books/destroy`,
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

export function handleNewBook(params){
    return ((dispatch) => {
        fetch(`${apiUrl}/books`,
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

export function search(searchText) {
    return ((dispatch) => {
        console.log('0')
        if(searchText !== ""){
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchText + 	'&maxResults=40', {
                method: "GET",
                dataType: 'json'
            })
            .then((r) => {
                return r.json()

            })
            .then((books) => {
                dispatch({
                    type: 'BOOK_SEARCH',
                    payload: books.items
                })
            })
        }
    })
}
