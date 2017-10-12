import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import BookTitle from './bookTitle'
import BookDetails from './bookDetails';
import { Redirect } from 'react-router-dom'
import './searchResult.css'

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

    handleNewBook(params){
        fetch(`${this.state.apiUrl}/books`,
            {
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        .then((rawResponse) => {
            console.log(rawResponse)
            return rawResponse.json()
        })
        .then((parsedResponse) => {
            if(parsedResponse.errors) {
                this.setState({errors: parsedResponse.errors})
            }else{
                const books = Object.assign([], this.state.books)
                books.push(parsedResponse.book)
                this.setState(
                    {
                        books: books,
                        errors: null,
                        newBookSuccess: true
                    })
                }
            })
        }

        handleSubmit(event){
            let author;
            if(this.props.volumeInfo.authors == undefined){
                author = "No Authors Found"
            }else{
                author = this.props.volumeInfo.authors[0]
            }
            var newBook = {
                title: this.props.volumeInfo.title,
                authors: author,
                description: this.props.volumeInfo.description,
                image: this.props.volumeInfo.imageLinks.thumbnail
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
                            Submit Fool!
                        </button>
                    </ToggleDisplay>
                </div>
            )
        }
}

export default SearchResult;
