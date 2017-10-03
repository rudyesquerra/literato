import React, { Component } from 'react';
import AddNewBook from './components/add-book'
import SearchForBook from './components/search-add-book'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Literato</h1>
        </header>
        <AddNewBook />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

		<SearchForBook />
      </div>
    );
  }
}

export default App;
