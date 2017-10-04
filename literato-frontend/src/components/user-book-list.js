import React, { Component } from 'react'

class UserBookList extends React.Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <h1>My Books</h1>
        <ul>
          {this.props.books.map((book, index) => {
            return(
              <li key={index}>
                <div>
                  <h4 className="book-title">{book.title}</h4>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    )
  }
}





export default UserBookList
