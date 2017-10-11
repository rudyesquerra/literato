import React, { Component }from 'react'
import { Redirect} from 'react-router-dom'
import Header from './header'
import Sidebar from './sidebar'
import UserBookList from '../user-book-list'
import SearchToAdd from '../googleComponents/search'

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <SearchToAdd />
                <UserBookList books={this.props.books} />
                    {this.props.delete && <Redirect to='/dashboard'/>}
            </div>
        )
    }
}

export default Dashboard;
