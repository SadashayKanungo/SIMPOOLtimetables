import React from 'react';
import{Container, Row, Col, Card, Spinner} from 'react-bootstrap';
import CountUp from 'react-countup';

export default function Counter (props){
    
        return(            
            <Container className="text-center" style={{height:'100%'}}>
                <Row>
                    <Col xs={6}>              
                        <Card>
                            <Card.Body className="p-2">
                                <Card.Title>
                                    {props.counter.count ?
                                        <CountUp separator="," end={props.counter.count.tables} /> :
                                        <><Spinner animation="grow" size="sm" />
                                        <Spinner animation="grow" size="sm" />
                                        <Spinner animation="grow" size="sm" /></>
                                    }
                                    
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer className="p-1"><strong>TABLES</strong></Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card>
                            <Card.Body className="p-2">
                                <Card.Title>
                                {props.counter.count ?
                                        <CountUp separator="," end={props.counter.count.students} /> :
                                        <><Spinner animation="grow" size="sm" />
                                        <Spinner animation="grow" size="sm" />
                                        <Spinner animation="grow" size="sm" /></>
                                    }
                                    
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer className="p-1"><strong>STUDENTS</strong></Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>            
        );
}
