import React, { Component } from 'react'
import {connect} from 'react-redux'

import { deleteBook } from '../actions/BookActions'

const mapComponentToProps = (store) =>{
    return {
        user: store.user.currentUser,
        userError: store.user.error,
        books: store.books.books,
        delete: store.books.deleteBookSuccess
    }
}

export default connect(mapComponentToProps)(

    class UserBookList extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                apiUrl: 'http://localhost:3000'
            }
        }

        handleDeleteBook(bookId) {
          this.props.dispatch(deleteBook(bookId))
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
                                            <button onClick={this.handleDeleteBook.bind(this, book.id)}>
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
)
