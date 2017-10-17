import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { handleUserLogout } from '../../actions/UserActions'
import Header from './header'
import Sidebar from './sidebar'
import DataBaseSearch from '../database-search.js'

class MakeTrades extends Component {
    handleLogout(){
        this.props.onSubmit()
    }

    render() {
        return(
            <div>
                <Header />
                    <Button bsStyle="link" className="sign-out-link" onClick={this.handleLogout.bind(this)}>Sign Out</Button>
                <Sidebar />
                <DataBaseSearch />
            </div>
        )
    }
}

export default MakeTrades;
