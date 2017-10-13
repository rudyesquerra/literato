import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Header from './components/dashboard/header'
import Dashboard from './components/dashboard/dashboard'
import DataBaseSearch from './components/database-search.js'
import { handleCheckLogin, handleUserLogin, handleNewUser } from './actions/UserActions'



const mapComponentToProps = (store) =>{
    return {
        user: store.user.currentUser,
        userError: store.user.error,
        logInUserSuccess: store.user.logInUserSuccess,
        newUserSuccess: store.user.newUserSuccess,
        books: store.books.books,
        delete: store.books.deleteBookSuccess,
        userBooks: store.books.userBooks
    }
}

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
      }

      handleUserLogin(params){
          this.props.dispatch(handleUserLogin(this.state.apiUrl, params))
      }

      handleNewUser(params){
          this.props.dispatch(handleNewUser(this.state.apiUrl, params))
      }

        render() {
            return (
                <Router>
                    <div>

                        <Route exact path='/' render={props => (
                            <div className="App">
                                <Header />
                                <DataBaseSearch />
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
