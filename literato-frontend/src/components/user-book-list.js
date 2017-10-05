import React, { Component } from 'react'


class UserBookList extends React.Component {

  render() {
    console.log(this.props)
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
				  <h5 className="book-image">{book.image}</h5>
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
