import React, { Component } from 'react';

class SearchForBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }



  render(){


var books = require('google-books-search')

var entry = prompt('What book are you looking for?')

	books.search(entry, function(error, results) {
		if ( ! error ) {
			console.log(results)
		} else {
			console.log(error);
		}
	});



    return (
		<div>
			<h1>{this.results}</h1>
		</div>
    )
  }
}

export default SearchForBook;
