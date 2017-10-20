import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from './header'
import Sidebar from './sidebar'
import UserBookList from '../user-book-list'
import SearchToAdd from '../googleComponents/search'

class Profile extends Component {

    handleLogout(){
        this.props.onSubmit()
    }

    render() {
        return(
            <div>
                <Header />
                    <Button bsStyle="link" className="sign-out-link" onClick={this.handleLogout.bind(this)}>Sign Out</Button>
                <Sidebar />
                <SearchToAdd />
                <UserBookList books={this.props.books} user={this.props.user} userBooks={this.props.userBooks} dispatch={this.props.dispatch}/>
                    {this.props.delete && <Redirect to='/profile'/>}
            </div>
        )
    }
}

export default Profile;
