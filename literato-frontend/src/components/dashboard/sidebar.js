import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to ='/dashboard'>
                            <p>My Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to ='/profile'>
                            <p>My Collection</p>
                        </Link>
                    </li>
                    <li>
                        <Link to ='/make-trades'>
                            <p>Make Trades</p>
                        </Link>
                    </li>
                    <li>
                        <Link to ='/pending'>
                            <p>Pending Trades</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
