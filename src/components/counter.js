import React from 'react';
import{Container, Row, Col, Card, Spinner} from 'react-bootstrap';
import CountUp from 'react-countup';

class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(            
            <Container className="text-center" style={{height:'90%'}}>
                <Row>
                    <Col xs={6}>              
                        <Card>
                            <Card.Body className="p-2">
                                <Card.Title>
                                    {this.props.counter.count ?
                                        <CountUp separator="," end={this.props.counter.count.tables} /> :
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
                                {this.props.counter.count ?
                                        <CountUp separator="," end={this.props.counter.count.students} /> :
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
}

export default Counter;