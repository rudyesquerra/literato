import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import BookTitle from './bookTitle'
import BookDetails from './bookDetails';
import './searchResult.css'
import {connect} from 'react-redux'
import { handleNewBook } from '../../actions/BookActions'

const mapComponentToProps = (store) =>{
    return {
        books: store.books.books,
        user: store.user.currentUser
    }
}

export default connect(mapComponentToProps)(
    class SearchResult extends Component {
        constructor(props){
            super(props);
            this.state = {
                apiUrl: 'http://localhost:3000',
                showDetails: false
            };
        }

        toggleDetails() {
            this.setState({showDetails: !this.state.showDetails});
        }

        componentWillMount() {
            fetch(`${this.state.apiUrl}/books`)
            .then((rawResponse) => {
                return rawResponse.json()
            })
            .then((parsedResponse) => {
                this.setState({books: parsedResponse.books})
            })
        }

        handleNewBook(params) {
            this.props.dispatch(handleNewBook(params))
        }

        handleSubmit(event){
            let author;
		        if(this.props.volumeInfo.authors === undefined){
			        author = "No Authors Found"
		        }else{
		            author = this.props.volumeInfo.authors[0]
		        }
            var newBook = {
                title: this.props.volumeInfo.title,
                authors: author,
                description: this.props.volumeInfo.description,
                image: this.props.volumeInfo.imageLinks.thumbnail,
                userId: this.props.user.id
            }
            event.preventDefault()
            this.handleNewBook(newBook)
        }

            render(){
                return(
                    <div>
                        <BookTitle {...this.props.volumeInfo} onClick={this.toggleDetails.bind(this)}/>
                        <ToggleDisplay show={this.state.showDetails}>
                        <BookDetails {...this.props.volumeInfo} />
                            <button onClick={this.handleSubmit.bind(this)}>
                                Add Book to Collection!
                            </button>
                        </ToggleDisplay>
                    </div>
                )
            }
    }
)
