import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Header from './components/dashboard/header'
import Dashboard from './components/dashboard/dashboard'
import DataBaseSearch from './components/database-search.js'
import { handleCheckLogin, handleUserLogin, handleNewUser, handleUserLogout } from './actions/UserActions'
import { deleteBook, loadBooks } from './actions/BookActions'



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

      handleLogout(){
          this.props.dispatch(handleUserLogout())
      }

        render() {
            return (
                <Router>
                    <div>

                        <Route exact path='/' render={props => (
                            <div className="App">
                                <Header />

                                <div className="forms">
                                    <Signup onSubmit={this.handleNewUser.bind(this)}/>
                                    {this.props.user && <Redirect to='/dashboard' />}
                                    <Login onSubmit={this.handleUserLogin.bind(this)} />
                                    {this.props.user &&
                                    <Redirect to='/dashboard' />}
                                </div>
                            </div>
                        )}/>
                        <Route exact path='/dashboard' render={props => (
                            <div>
                                <Dashboard onSubmit={this.handleLogout.bind(this)} />
                                {!this.props.user && <Redirect to='/login' />}

                                <DataBaseSearch />

                            </div>
                        )}/>
                        <Route exact path='/signup' render={props => (
                            <div>
                                <Signup onSubmit={this.handleNewUser.bind(this)}/>
                                {this.props.user && <Redirect to='/dashboard' />}
                            </div>
                        )}/>
                        <Route exact path='/login' render={props => (
                            <div>
                                <Login onSubmit={this.handleUserLogin.bind(this)} />
                                {this.props.user &&
                                <Redirect to='/dashboard' />}
                            </div>
                        )}/>
                    </div>
                </Router>
            );
        }
    }
)
