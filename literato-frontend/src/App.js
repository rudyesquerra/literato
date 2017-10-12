import React, { Component } from 'react';
import SearchToAdd from './components/googleComponents/search'
import UserBookList from './components/user-book-list'
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';


export default connect(mapComponentToProps)(
    class App extends Component {
        constructor(props) {
            super(props)
            this.state = {
                apiUrl: 'http://localhost:3000',
                newBookSuccess: false,
            }
        }

      componentWillMount() {
          this.props.dispatch(handleCheckLogin(this.state.apiUrl))
          this.props.dispatch(loadBooks(this.state.apiUrl))
      }


        render() {
            return (
                <Router>
                    <div>
                        <Route exact path='/' render={props => (
                            <div className="App">
                                <Header />
                                <UserBookList books={this.state.books} />
                                    {this.state.delete && <Redirect to='/'/>}
                            </div>
                        )}/>
                        <Route exact path='/dashboard' render={props => (
                            <div>
                                <Dashboard />
                            </div>
                        )}/>
                        <Route exact path='/signup' render={props => (
                            <div>
                                <Signup onSubmit={this.handleNewUser.bind(this)}/>
                                {this.props.newUserSuccess && <Redirect to='/dashboard' />}
                            </div>
                        )}/>
                        <Route exact path='/login' render={props => (
                            <div>
                                <Login onSubmit={this.handleUserLogin.bind(this)} />
                                {this.props.logInUserSuccess &&
                                <Redirect to='/dashboard' />}
                            </div>
                        )}/>
                    </div>
                </Router>
            );
        }
    }
)
