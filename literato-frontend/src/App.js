import React, { Component } from 'react';
import AddNewBook from './components/add-book'
import UserBookList from './components/user-book-list'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: 'http://localhost:3000',
      books: [],
      newBookSuccess: false,
      errors: null
    }
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

  render() {
      console.log("from app.js" + this.state.books);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Literato</h1>
        </header>
        <UserBookList books={this.state.books} />
        <AddNewBook />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
