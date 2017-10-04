import React, { Component } from 'react';

export default class AddNewBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: '',
        authors: '',
        image: '',
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
        <label>Authors:</label>
          <input type="text" name="authors" onChange={this.handleChange.bind(this)} value={this.state.form.authors} />
        <label>Description:</label>
          <input type="text" name="description" onChange={this.handleChange.bind(this)} value={this.state.form.description} />
        <label>Image:</label>
          <input type="text" name="image" onChange={this.handleChange.bind(this)} value={this.state.form.image} />
        <button onClick={this.handleSubmit.bind(this)}>Add Book</button>
      </form>

    )
  }
}
