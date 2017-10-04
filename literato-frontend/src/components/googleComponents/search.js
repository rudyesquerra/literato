import React, { Component } from 'react';
import {
	Row,
	Col,
	FormControl,
	Button
} from 'react-bootstrap';
import SearchResultsList from './searchResultsList'


class SearchToAdd extends Component {
	constructor(props){
      super(props);
      this.state = {
        books: [],
        searchText: ""
      };
    }
    handleKeyPress(event){
      let self = this;
      let value = event.target.value;
      this.setState({searchText: value})
      if(event.key === "Enter" && value){
        self.search()
      }
    }
    search() {
      let self = this
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + self.state.searchText + '&maxResults=40', {
          method: "GET",
          dataType: 'json'
        })
        .then((r) => r.json())
        .then(books => self.setState({books: books.items}) )
    }

    render(){
      return (
		  <Row>
                <Col md={12}>
                  <FormControl type="text" id='searchText' placeholder="Search" onKeyPress={this.handleKeyPress.bind(this)}/>
                  <Button id="search" bsStyle="primary" onClick={this.search.bind(this)}> Search</Button>
                  <SearchResultsList books={this.state.books}></SearchResultsList>
                </Col>
              </Row>
		  )
    }
  }

export default SearchToAdd;
