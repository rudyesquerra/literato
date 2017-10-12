import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './bookTitle.css'


class BookTitle extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Row className='book' onClick={this.props.onClick}>
                <Col md={8}>
                    <span className='title'>{this.props.title}</span>
                </Col>
                <Col md={4}>
                    <div className='authors'>{(this.props.authors) ?
                        this.props.authors.join(", ") : ""}
                    </div>
                    <div className="publishers">{this.props.publisher}
                        {(this.props.publishedDate) ? "(" + this.props.publishedDate + ")":
                        ""}
                    </div>
                </Col>
            </Row>
		)
	}
}

export default BookTitle
