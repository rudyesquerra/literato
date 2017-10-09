import React, { Component } from 'react'
import { Button, Col, ControlLabel, FormGroup, FormControl, Row, Grid, PageHeader, } from 'react-bootstrap'

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
            <Grid>
                <PageHeader>
                    <Row>
                        <Col xs={8}>
                        Signup Here
                        </Col>
                    </Row>
                </PageHeader>
                <form>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel id="name">Name </ControlLabel>
                                <FormControl
                                    type="text"
                                    name="name"
                                    value={this.state.form.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel id="email">Email </ControlLabel>
                                <FormControl
                                    type="text"
                                    name="email"
                                    value={this.state.form.email}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel id="username">Username </ControlLabel>
                                <FormControl
                                    type="text"
                                    name="username"
                                    value={this.state.form.username}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel id="password">Password </ControlLabel>
                                <FormControl
                                    type="password"
                                    name="password"
                                    value={this.state.form.password}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel id="age">Age </ControlLabel>
                                <FormControl
                                    type="number"
                                    name="age"
                                    value={this.state.form.age}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Button
                                onClick={this.handleSubmit.bind(this)}
                                id='submit'>Sign up</Button>
                        </Col>
                    </Row>
                </form>
            </Grid>

        )
    }
}

export default Signup
