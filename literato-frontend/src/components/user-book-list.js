import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import { deleteBook, loadBooks } from '../actions/BookActions'
import { handleCheckLogin } from '../actions/UserActions'

const mapComponentToProps = (store) =>{
    // console.log(store.user);

    return {
        user: store.user.currentUser,
        userError: store.user.error,
        userBooks: store.books.userBooks,
        delete: store.books.deleteBookSuccess,
        books: store.books.books,
    }

}

export default connect(mapComponentToProps)(
    class UserBookList extends Component {

        constructor(props) {
            super(props)
            this.state = {
                apiUrl: 'http://localhost:3000'
            }
            console.log(this.props);
        }


        componentWillMount(){
            this.props.dispatch(handleCheckLogin(this.state.apiUrl))
        }

        handleDeleteBook(bookId) {
          this.props.dispatch(deleteBook(bookId))
        }

        render() {
            {console.log(this.props.userBooks[0])}
            {console.log(this.props.user)}

            return(
                <div className="main">



                    <h1>My Books</h1>
                    {this.props.user && this.props.userBooks &&
                        <ol className="my-books-list">
                            {this.props.userBooks && this.props.userBooks.map((userBooks, index) => {
                                return(
                                    <li key={index} className="flex-item">
                                        <div>
                                            <img src={userBooks.image}/>
                                            <h4 className="book-title">{userBooks.title}</h4>
                                            <h5 className="book-authors">{userBooks.authors}</h5>
                                            <Button onClick={this.handleDeleteBook.bind(this, userBooks.id)} className="delete-book btn btn-default">
                                            Delete Book
                                            </Button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    }
                </div>
            )
        }
    }
)
