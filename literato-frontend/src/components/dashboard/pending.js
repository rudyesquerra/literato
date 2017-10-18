import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { handleUserLogout, viewUserBooks } from '../../actions/UserActions'
import Header from './header'
import Sidebar from './sidebar'

const mapComponentToProps = (store) =>{
    return {
        user: store.user.currentUser,
        requests: store.user.requests
    }
}

export default connect(mapComponentToProps)(

    class Pending extends Component {


        handleLogout(){
            this.props.onSubmit()
        }

        handleOnClick(request){
            this.props.dispatch(viewUserBooks(request))
            return true
        }

        render() {
            console.log(this.props.requests)
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
                                            <Link to="/current-request" onClick={this.handleOnClick.bind(this, request)}>See {request.user1.username} books</Link>
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
