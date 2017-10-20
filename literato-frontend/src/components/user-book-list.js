import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { deleteBook, tradeBook } from '../actions/BookActions'
import { handleCheckLogin } from '../actions/UserActions'
import { Link } from 'react-router-dom'


class UserBookList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'http://localhost:3000'
        }
    }


    componentWillMount(){
        this.props.dispatch(handleCheckLogin(this.state.apiUrl))
    }

    handleDeleteBook(bookId) {
      this.props.dispatch(deleteBook(bookId))
    }

    handleCompleteTrade(bookId){
      this.props.dispatch(tradeBook(this.props.currentRequest, bookId))
    }

    action(userBook){
        if(this.props.currentRequest){
            return(
                <Button onClick={this.handleCompleteTrade.bind(this, userBook.id)} className="trade-book btn btn-default">
                Trade for Book
                </Button>
            )

        } else {
            return (
                <Button onClick={this.handleDeleteBook.bind(this, userBook.id)} className="delete-book btn btn-default">
                Delete Book
                </Button>
            )
        }
    }

    render() {
        var title
        if (this.props.currentRequest){
          title = <h1>{this.props.user.username}&#39;s Books</h1>
        } else {
          title = <h1>My Collection</h1>
        }
        return(
            <div className="main">
                { title }
                {this.props.user && this.props.userBooks &&
                    <ol className="my-books-list">
                        {this.props.userBooks && this.props.userBooks.map((userBooks, index) => {
                            return(
                                <li key={index} className="flex-item">
                                    <div>
                                        <img alt="book" src={userBooks.image}/>
                                        <h4 className="book-title">{userBooks.title}</h4>
                                        <h5 className="book-authors">{userBooks.authors}</h5>
                                        {this.action(userBooks)}
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                }
                <Link to='/dashboard'>{this.props.successMessage}</Link>
            </div>
        )
    }
}

export default UserBookList
