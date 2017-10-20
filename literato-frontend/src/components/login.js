import React, { Component } from 'react'
import { Button, ControlLabel, FormControl } from 'react-bootstrap'

class Login extends Component{
    constructor(props) {
        super(props)
        this.state={
            form:{
                email: '',
                password: '',
            }
        }
    }

    handleChange(event) {
        const formState=Object.assign({}, this.state.form)
        formState[event.target.name]=event.target.value
        this.setState({form:formState})
    }

    handleSubmit() {
        this.props.onSubmit(this.state.form)
    }

    render() {
        return(
            <div className="big-card-two">
                <h1>
                    Login Here
                </h1>
                <form>
                    <div className="form-group">
                        <ControlLabel id="email">Email </ControlLabel>
                        <FormControl
                            type="text"
                            name="email"
                            value={this.state.form.email}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <ControlLabel id="password">Password </ControlLabel>
                        <FormControl
                            type="password"
                            name="password"
                            value={this.state.form.password}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <Button
                        onClick={this.handleSubmit.bind(this)}
                        id='submit'>Login
                    </Button>
                    &nbsp;
                    <Button
                        href='/signup'>Sign Up
                    </Button>
                </form>
            </div>

        )
    }
}

export default Login
