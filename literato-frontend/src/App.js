import React, { Component } from 'react';
import SearchToAdd from './components/googleComponents/search'
import UserBookList from './components/user-book-list'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.css';
import Header from './components/dashboard/header'
import Dashboard from './components/dashboard/dashboard'

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



  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={props => (
            <div className="App">
              <Header />

              <UserBookList books={this.state.books} />
              {this.state.newBookSuccess && <Redirect to='/books'/>}
              </div>
          )}/>

            <Route exact path='/dashboard' render={props => (
              <div>
                <Dashboard />
              </div>
            )}/>
        </div>
      </Router>
    );
  }
}

export default App;
