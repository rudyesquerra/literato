import React, { Component } from 'react';
import SearchToAdd from './components/googleComponents/search'
import UserBookList from './components/user-book-list'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Header from './components/dashboard/header'
import Dashboard from './components/dashboard/dashboard'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'http://localhost:3000',
            books: [],
            newBookSuccess: false,
            errors: null,
            user: null,
            newUserSuccess: false,
            loginUserSuccess: false
        }
        this.handleCheckLogin()
    }

    handleCheckLogin(){
        var userEmail = localStorage.getItem('userEmail');
        if(userEmail){
            fetch(`${this.state.apiUrl}/user`,
            {
                body: JSON.stringify({email: userEmail}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST"
            }
        )
        .then((rawResponse)=>{
            return rawResponse.json()
        })
        .then((parsedResponse)=>{
            if(parsedResponse.errors){
                this.setState({errors: parsedResponse.errors})
            }else{
                this.setState({
                    user:parsedResponse.user,
                    errors: null,
                    loginUserSuccess: true
                })
            }
        })
        }
    }

    handleUserLogin(params){
        fetch(`${this.state.apiUrl}/login`,
        {
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        }
    )
    .then((rawResponse)=>{
        return rawResponse.json()
    })
    .then((parsedResponse)=>{
        if(parsedResponse.errors){
            this.setState({errors: parsedResponse.errors})
        }else{
            localStorage.setItem('userEmail', parsedResponse.user.email);
                this.setState({
                    user: parsedResponse.user,
                    errors: null,
                    loginUserSuccess: true
                })
            }
        })
    }

    handleNewUser(params){
        fetch(`${this.state.apiUrl}/signup`,
        {
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        })
        .then((rawResponse)=>{
            return rawResponse.json()
        })
        .then((parsedResponse)=>{
            if(parsedResponse.errors){
                this.setState({errors: parsedResponse.errors})
            }else{
                this.setState({
                    user: parsedResponse.user,
                    errors: null,
                    newUserSuccess: true
                })
            }
        })
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
                    <Route exact path='/signup' render={props => (
                        <div>
                            <Signup onSubmit={this.handleNewUser.bind(this)}/>
                            {this.state.newUserSuccess && <Redirect to='/dashboard' />}
                        </div>
                    )}/>
                    <Route exact path='/login' render={props => (
                        <div>
                            <Login onSubmit={this.handleUserLogin.bind(this)}/>
                            {this.state.loginUserSuccess && <Redirect to='/dashboard' />}
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
}

export default App;
