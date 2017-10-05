import React, { Component } from 'react';
import SearchResult from "./searchResult";

class SearchResultsList extends Component {
  render(){
    const {books} = this.props
    return(
      <div>
        {books.map(book => <SearchResult key={book.id} {...book} />)}
      </div>
    )
  }
}

export default SearchResultsList;
