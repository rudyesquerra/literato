import React, { Component } from 'react';
import SearchToAdd from './components/googleComponents/search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Literato</h1>
        </header>
        <SearchToAdd />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

	
      </div>
    );
  }
}

export default App;
