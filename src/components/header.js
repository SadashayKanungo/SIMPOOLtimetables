import React, {useState} from 'react';
import Counter from './counter.js'
import {Jumbotron, Container, Row, Col, Media, Form, InputGroup, Button} from 'react-bootstrap';
import { red } from '@material-ui/core/colors';

export default (props) => {

    const [ID, setID] = useState('');
    const onFill=(e)=>{
        console.log(e);
    }

    return(
        <Jumbotron fluid className="p-2">
        <Container fluid>
            <Row>
                <Col md={6}>
                    <Media>
                        <img src="./logo.png" alt="logo" className="p-1" width="22.5%" />
                        <Media.Body className="align-self-center">
                            <h1>SIMPooL</h1>
                            <h6><strong>TIMETABLE  GENERATOR</strong></h6>
                        </Media.Body>
                    </Media>
                </Col>
                <Col md={{span:5,offset:1}} lg={{span:4,offset:2}}>
                        <InputGroup className="mt-2">
                            <Form.Control id="bitsid" placeholder="BITS ID" value={ID} onChange={(e)=>{setID(e.target.value); console.log(e.target.value)}}/>
                            <InputGroup.Append>
                                <Button style={{backgroundColor: "red"}} onSubmit={(e)=>{e.preventDefault();}}>Enter your BITS ID</Button>
                            </InputGroup.Append>
                        </InputGroup>
                </Col>            
            </Row>
        </Container>
        </Jumbotron>
    );
}