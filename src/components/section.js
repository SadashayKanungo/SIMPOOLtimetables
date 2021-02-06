import React from 'react';
import {Container,Row,Col, Popover, OverlayTrigger, Badge} from 'react-bootstrap';



//const data = {"EEE_F215": {"name": "DIGITAL DESIGN", "secnos": 6, "sec": {"1": {"instructor": "ABHIJIT PETHE, ABHIJIT PETHE, NOEL PRASHANT RATCHAGAR, ANSA SHERMIN S,  PRATEEK SINGH, JOSHI VIRAJ VILAS, JERRY ANTO K, SURAJ S"}, "2": {"instructor": "RAVI KADLIMATTI, RAVI KADLIMATTI, SUDEEP BAUDHA, RAVI KADLIMATTI, AFROZ FATIMA, SWATI VARUN YADAV, JOSHI VIRAJ VILAS"}, "3": {"instructor": "SUDEEP BAUDHA, SARANG C DHONGDI, SARANG C DHONGDI, SUDEEP BAUDHA, RAVI KADLIMATTI, JOSHI VIRAJ VILAS, AFROZ FATIMA, MANISH VARUN YADAV, PRATEEK SINGH"}, "4": {"instructor": "HRISHIKESH SONALIKAR, HRISHIKESH SONALIKAR, PRAMILA,  AFROZ FATIMA, ANSA SHERMIN S, MANISH VARUN YADAV, SWATI VARUN YADAV"}, "5": {"instructor": "SUDEEP BAUDHA"}, "6": {"instructor": "NOEL PRASHANT RATCHAGAR"}}}}


export default (props) => {
    function lookup(id){
        let [c,s] = id.split(' ');
        return props.data[c].sec[s];
    }

    return(        
        <Container fluid className="section">
            <Row>
                <Col xs={1}>
                  <strong>{props.secid.slice(-1)}</strong>
                </Col>                
                    <OverlayTrigger trigger="click" key={props.secid}
                        overlay={
                            <Popover id={props.secid}>
                                <Popover.Title>{"Section " + props.secid.slice(-1)}</Popover.Title>                                                        
                                <Popover.Content>
                                    {lookup(props.secid).instructor}
                                </Popover.Content>
                            </Popover> }>
                            <Col xs={9} className="instructors text-left">
                                {lookup(props.secid).instructor}
                            </Col>
                    </OverlayTrigger>               
                <Col xs={1} className="p-0">
                  <Badge className="pt-0 pb-0 pr-1 pl-1" style={{fontSize:"1.5rem"}} variant="light" >&#x2b0d;</Badge>
                </Col>
            </Row>   
        </Container>
    );
}