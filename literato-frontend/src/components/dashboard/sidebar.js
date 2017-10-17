import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar">
                <ul>
                    <li>
                        <h4>My Collection</h4>
                    </li>
                    <li>
                        <h4>Make Trades</h4>
                    </li>
                    <li>
                        <h4>Pending Trades</h4>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
