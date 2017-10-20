import React, { Component } from 'react'
import { Button, ControlLabel, FormControl } from 'react-bootstrap'

class Signup extends Component{
    constructor(props) {
        super(props)
        this.state={
            form:{
                name: '',
                email: '',
                password: '',
                username: '',
                age: ''
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
            <div className="big-card-one">
                <h1>
                    Signup Here
                </h1>
                <form>
                    <div className="form-group">
                        <ControlLabel id="name">Name</ControlLabel>
                        <FormControl
                            type="text"
                            name="name"
                            value={this.state.form.name}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
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
                        <ControlLabel id="username">Username </ControlLabel>
                        <FormControl
                            type="text"
                            name="username"
                            value={this.state.form.username}
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
                    <div className="form-group">
                        <ControlLabel id="age">Age </ControlLabel>
                        <FormControl
                            min="1"
                            type="number"
                            name="age"
                            value={this.state.form.age}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <Button
                        onClick={this.handleSubmit.bind(this)}
                        id='submit'>Sign up
                    </Button>
                </form>
            </div>
        )
    }
}

export default Signup
