import React from 'react';
import {Card, Container, ListGroup, Row, Col, Badge} from 'react-bootstrap';
import Section from './section.js';


const data = {"EEE_F215": {"name": "DIGITAL DESIGN", "secnos": 6, "sec": {"1": {"instructor": "ABHIJIT PETHE, ABHIJIT PETHE, NOEL PRASHANT RATCHAGAR, ANSA SHERMIN S,  PRATEEK SINGH, JOSHI VIRAJ VILAS, JERRY ANTO K, SURAJ S"}, "2": {"instructor": "RAVI KADLIMATTI, RAVI KADLIMATTI, SUDEEP BAUDHA, RAVI KADLIMATTI, AFROZ FATIMA, SWATI VARUN YADAV, JOSHI VIRAJ VILAS"}, "3": {"instructor": "SUDEEP BAUDHA, SARANG C DHONGDI, SARANG C DHONGDI, SUDEEP BAUDHA, RAVI KADLIMATTI, JOSHI VIRAJ VILAS, AFROZ FATIMA, MANISH VARUN YADAV, PRATEEK SINGH"}, "4": {"instructor": "HRISHIKESH SONALIKAR, HRISHIKESH SONALIKAR, PRAMILA,  AFROZ FATIMA, ANSA SHERMIN S, MANISH VARUN YADAV, SWATI VARUN YADAV"}, "5": {"instructor": "SUDEEP BAUDHA"}, "6": {"instructor": "NOEL PRASHANT RATCHAGAR"}}}}

const sampleSeclist = ["EEE_F215 2","EEE_F215 1","EEE_F215 4","EEE_F215 3","EEE_F215 6","EEE_F215 5",]

export default (props) => {
    return(
        <Card className="course mt-2 p-1">
            <Container fluid>
                <Row>
                    <Col xs={1} className="p-0">
                        <Badge className=" pr-1 pl-1" style={{fontSize:"1rem"}} variant="light" >&#10008;</Badge>
                    </Col>
                    <Col xs={9}>
                        <Card.Title>{data[sampleSeclist[0].slice(0,-2)].name}</Card.Title>
                        <Card.Subtitle>{sampleSeclist[0].slice(0,-2).replace('_',' ')}</Card.Subtitle>
                    </Col>
                    <Col xs={1} className="p-0 ml-2">
                        <Badge className="pt-0 pb-0 pr-1 pl-1" style={{fontSize:"1.5rem"}} variant="light" >&#x2b0d;</Badge>
                    </Col>
                </Row>
            </Container>
            <ListGroup >
                {
                    sampleSeclist.map(sec => 
                    <ListGroup.Item key={sec} className="section p-0">
                        <Section secid={sec} data={data}/>
                    </ListGroup.Item>)
                }                 
                
            </ListGroup>
        </Card>
    );
    
}