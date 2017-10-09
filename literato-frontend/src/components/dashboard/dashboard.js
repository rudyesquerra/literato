import React, { Component }from 'react'
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
            </div>
        )
    }
}

export default Dashboard;
