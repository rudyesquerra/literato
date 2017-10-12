import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux'

import { deleteBook } from '../actions/BookActions'
import { handleNewBook } from '../actions/BookActions'

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
            return(
                <div className="main">
                    <h1>My Books</h1>
                        <ol className="my-books-list">
                            {this.props.books && this.props.books.map((book, index) => {
                                return(
                                    <li key={index} className="flex-item">
                                        <div>
                                            <img src={book.image}/>
                                            <h4 className="book-title">{book.title}</h4>
                                            <h5 className="book-authors">{book.authors}</h5>
                                            <Button onClick={this.handleDeleteBook.bind(this, book.id)} clasName="delete-book btn btn-default">
                                            Delete Book
                                            </Button>
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
