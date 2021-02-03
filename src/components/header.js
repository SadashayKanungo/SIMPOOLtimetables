import React from 'react';
import Counter from './counter.js'
import {Jumbotron, Container, Row, Col, Image, Media} from 'react-bootstrap';

export default (props) => {
    return(
        <Jumbotron fluid className="p-2">
        <Container fluid>
            <Row>
                <Col md={6}>
                    <Media>
                        <img src="./logo.png" alt="logo" className="p-1" width="25%" />
                        <Media.Body class="xs-12 align-self-center text-center">
                            <h1>SIMPooL</h1>
                            <h6><strong>TIMETABLE  GENERATOR</strong></h6>
                        </Media.Body>
                    </Media>
                </Col>
                <Col md={6}>
                    <Counter server={props.server}/>
                </Col>            
            </Row>
        </Container>
        </Jumbotron>
    );
}