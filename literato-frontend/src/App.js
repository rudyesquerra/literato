import React, { Component } from 'react';
import SearchToAdd from './components/googleComponents/search'
import AddNewBook from './components/add-book'
import UserBookList from './components/user-book-list'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
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

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Literato</h1>
          </header>
          <SearchToAdd />

          <UserBookList books={this.state.books} />
          <AddNewBook onSubmit={this.handleNewBook.bind(this)}/>
          {this.state.newBookSuccess && <Redirect to='/books'/>}
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
