import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { handleUserLogout } from '../../actions/UserActions'
import Header from './header'
import Sidebar from './sidebar'
import UserBookList from '../user-book-list'
import SearchToAdd from '../googleComponents/search'

class Dashboard extends Component {

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
                <UserBookList books={this.props.books} />
                    {this.props.delete && <Redirect to='/dashboard'/>}
            </div>
        )
    }
}

export default Dashboard;
