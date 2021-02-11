import React from 'react';
import {Card, Container, Row, Col, Badge} from 'react-bootstrap';


export default (props) => {
    return(
        <Card className="addpool d-inline-block mb-3 mr-3" style={{width:"18rem", height: "20rem", flex: "0 0 auto"}}>
            <Card.Body style={{ height: "100%"}} className="p-2 d-flex flex-column justify-content-around">
                <Card className="section">
                    <Card.Body>
                    <Container fluid>
                    <Row className="align-items-center">
                        <Col xs={1} className="p-0">
                            <i className="fa fa-plus-circle fa-3x"></i>
                        </Col>
                        <Col xs={10}>                            
                            <Card.Title className="m-0">ADD NEW POOL</Card.Title>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                </Card>
                <Card className="section">
                    <Card.Body>
                        <Container fluid>
                    <Row className="align-items-center">
                        <Col xs={1} className="p-0">
                            <i className="fa fa-check-circle fa-3x"></i>
                        </Col>
                        <Col xs={10}>
                            <Card.Title className="m-0">SUBMIT POOLs</Card.Title>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
}