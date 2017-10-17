import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Header from './header'
import Sidebar from './sidebar'

class Dashboard extends Component {

    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div className="overview">
                    <div>
                        <h3>Make Trade</h3>
                    </div>
                    <div>
                        <h3>My Library</h3>
                    </div>
                    <div>
                        <h3>Pending Trades</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
