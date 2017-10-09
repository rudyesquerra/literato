import React, { Component } from 'react';
import SearchToAdd from './components/googleComponents/search'
import UserBookList from './components/user-book-list'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.css';
import DataBaseSearch from './components/database-search'

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
		        <div className="App">
			        <header className="App-header">
			           	<h1 className="App-title">Welcome to Literato</h1>
			        </header>
			        <SearchToAdd />

					<UserBookList books={this.state.books} />
					<DataBaseSearch />
		        </div>
	      	</Router>
	    );
  	}
}

export default App;
