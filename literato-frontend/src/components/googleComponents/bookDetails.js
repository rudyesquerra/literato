import React, { Component } from 'react';
import { Row, Col, Well, Image } from 'react-bootstrap';
import './bookDetails.css'

class BookDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail :
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
            description: props.description
        };
    }

    render(){
        return (
            <Row className="details">
                <Col md={12}>
                    <Well>
                        <Row>
                            <Col md={2}>
                                <Image className='thumbnail' src={this.state.thumbnail} thumbnail />
                            </Col>
                            <Col md={10}>
                                <p className='description'>{this.state.description}</p>
                            </Col>
                        </Row>
                    </Well>
                </Col>
            </Row>
        )
    }
}

export default BookDetails;
