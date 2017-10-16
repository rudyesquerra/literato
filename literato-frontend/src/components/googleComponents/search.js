import React, { Component } from 'react';
import {
	Row,
	Col,
	FormControl,
	Button
} from 'react-bootstrap';
import {connect} from 'react-redux'
import SearchResultsList from './searchResultsList'
import './search.css'
import { search } from '../../actions/BookActions'

const mapComponentToProps = (store) =>{
    return {
        searchResults: store.books.searchResults,
    }
}

export default connect(mapComponentToProps)(

    class SearchToAdd extends Component {
        constructor(props){
            super(props);
            this.state = {
                searchText: "",
            };
        }

        handleKeyPress(event){
    		let self = this;
    		let value = event.target.value;
    		this.setState({searchText: value})
    		if(event.key === "Enter" && value !== "" ){
    			self.handleSearch()
    		}
        }

        handleSearch(event){
            this.props.dispatch(search(this.state.searchText))
        }

        render(){
            return (
                <div className="main">
                    <Row>
                        <Col md={10}>
                            <FormControl type="text" id='searchText' placeholder="Search" onChange={this.handleKeyPress.bind(this)} />
                                <Button id="search" bsStyle="primary" onClick={this.handleSearch.bind(this)}>Search
                                </Button>
                                <SearchResultsList books={this.props.searchResults} />
                        </Col>
                    </Row>
                </div>
    		)
        }
    }
)
