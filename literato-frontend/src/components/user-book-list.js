import React, { Component } from 'react'

class UserBookList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        apiUrl: 'http://localhost:3000'
      }
  }

deleteBook(id) {
  fetch(`${this.state.apiUrl}/books/destroy`,
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
      console.log(parsedResponse)
  })
}

  render() {
    console.log(this.props.books)
    return(
      <div>
        <h1>My Books</h1>
        <ol>
          {this.props.books.map((book, index) => {
            return(
              <li key={index}>
                <div>
                  <h4 className="book-title">{book.title}</h4>
                  <h5 className="book-authors">{book.authors}</h5>
                  <h5 className="book-description">{book.description}</h5>
                  <h5>{book.id}</h5>
                  <button onClick={this.deleteBook.bind(this, book.id)}>
                  Delete Book
                  </button>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

    )
  }
}





export default UserBookList
