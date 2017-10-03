import React, { Component } from 'react';

export default class AddNewBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: ''
      }
    }
  }
  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.title] = event.target.value
    this.setState({form: formState})
  }
  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  render(){
    return (
      <form>
        <h3>Add New Book</h3>
        <label>Title:</label>
        <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.form.title} />
        <button onClick={this.handleSubmit.bind(this)}>Add Book</button>
      </form>
    )
  }
}
