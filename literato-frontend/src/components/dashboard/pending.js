import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { handleUserLogout } from '../../actions/UserActions'
import Header from './header'
import Sidebar from './sidebar'

const mapComponentToProps = (store) =>{
    return {
        user: store.user.currentUser,
        requests: store.user.requests
    }
}

export default connect(mapComponentToProps)(

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
                    <div className="trades">
                        <ul>
                            {this.props.requests &&
                             this.props.requests.map((request, index) => {
                                return(
                                    <li key={index} className="flex-item">
                                        <div>
                                            <p>Requested book: {request.book2.title}</p>
                                            <p>From: {request.user1.username}</p>
                                            <p>{request.createdAt}</p>
                                            <button>See {request.user1.username}'s books</button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
)
