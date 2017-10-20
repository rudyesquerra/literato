import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { handleUserLogout } from '../../actions/UserActions'
import Header from './header'
import Sidebar from './sidebar'


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
                <div className="overview">
                    <div className="dashboard-box">
                        <Link to ='/make-trades'>
                            <h3>Make Trades</h3>
                            <img id="searchBookImg" src='../../images/searchBooks.svg' />
                        </Link>
                    </div>
                    <div className="dashboard-box">
                        <Link to ='/profile'>
                            <h3>My Collection</h3>
                            <div className="img-holder">
                                <img src='../../images/books.svg' />
                            </div>
                        </Link>
                    </div>
                    <div className="dashboard-box">
                        <Link to ='/pending'>
                            <h3>Pending Trades</h3>
                            <img src='../../images/pendingTrade.svg' />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
