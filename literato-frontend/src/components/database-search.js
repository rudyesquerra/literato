import React, { Component } from 'react';
import {
	Row,
	Col,
	FormControl,
	Button
} from 'react-bootstrap';
import {connect} from 'react-redux'

const mapComponentToProps = (store) =>{
    return {
        user: store.user.currentUser,
        userError: store.user.error
    }
}

export default connect(mapComponentToProps)(
    class DataBaseSearch extends Component {
    	constructor(props){
          	super(props);
          	this.state = {
    		apiUrl: 'http://localhost:3000',
    	        searchText: "",
               	dbBooks: []
          	};
        }

        handleKeyPress(event){
            let self = this;
            let value = event.target.value;
            this.setState({searchText: value})
            if(event.key === "Enter" && value !== "" ){
                self.search()
            }
        }

        search() {
        	let self = this
    		if(self.state.searchText !== ""){
    			fetch('http://localhost:3000/dbsearch/' + self.state.searchText, {
    			    method: "GET",
    			    dataType: 'json'
    			})
    			.then((rawResponse) =>{
    				return rawResponse.json()
    			})
    			.then((jsonresp)=>{
    				this.setState(
    				{
    				    dbBooks : jsonresp,
    				})
    			})
        	}
        }

        render(){
            {console.log('dbBooks 0: ' + JSON.stringify(this.state.dbBooks.username))}
                    var list = this.state.dbBooks.map((books, index) => {
                        return(
                            <li key={index}>
                                <div>
                                <h4 className="book-title">{books.title}</h4>
                                <h5 className="book-authors">{books.authors}</h5>
                                <h6 className="book-owner">Owned by {books.username}</h6>
                                <Button onClick='' className="trade-book btn btn-default">
                                Trade Book
                                </Button>
                                </div>
                            </li>
                        )
                    })

        	return(
                <Row>
                	<Col md={12}>
                		<FormControl type="text" id='searchText' placeholder="Search" onChange={this.handleKeyPress.bind(this)}/>
                    	<Button id="search" bsStyle="primary" onClick={this.search.bind(this)}> Search</Button>
        				<ol>
        					{list}
        			    </ol>
                        {console.log('searched books: ' + this.state.dbBooks)}
                	</Col>
            	</Row>
    	    )
        }
    }
)
