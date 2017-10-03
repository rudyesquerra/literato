import React, { Component } from 'react';

export default class AddNewBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: '',
        authors: '',
        images: '',
        description: ''
      },
      user: 'anonymous'
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
        <input type="text" name="authors" onChange={this.handleChange.bind(this)} value={this.state.form.authors} />
        <input type="text" name="description" onChange={this.handleChange.bind(this)} value={this.state.form.description} />
        <input type="text" name="image" onChange={this.handleChange.bind(this)} value={this.state.form.image} />
        <button onClick={this.handleSubmit.bind(this)}>Add Book</button>
      </form>

    )
  }
}
