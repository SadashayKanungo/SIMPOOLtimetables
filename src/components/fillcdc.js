import React from 'react';
import { Card, Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

export default (props) => {
    function onFill(){
        function makeKey(bitsid){
            var [todayYear,todayMonth] = new Date().toISOString().slice(0, 8).split('-');
            var sem = parseInt(todayYear) - parseInt(bitsid.slice(0,4)) + 2;            
            if(parseInt(todayMonth) >= 6) sem=sem+1;
            var branch = (bitsid[4]==='A') || (bitsid[4]==='a') ? bitsid.slice(4,6) : bitsid.slice(4,8);

            /*Data is for Odd Sem*/
            sem=sem-1;
            
            return String(sem) + branch;
        }

        function makeCDCPool(cdclist){
            var cdcpool = [];
            for (let cdc of cdclist){
                cdcpool.push([cdc + ' ' + Object.keys(props.data[cdc].sec)[0]]);
            }
            return cdcpool;
        }
        
        function getCDC(key){
            fetch(props.serverURL + '/cdc/' + key)
            .then(response => response.json())
            .then(cdclist => props.modifyPoolList("cdc",props.poolIndex,null,null,makeCDCPool(cdclist)))
            .catch(error => console.log(error));
        }        
        const tempcdc = ["MATH_F211", "PHY_F211", "PHY_F212", "PHY_F213", "PHY_F214", "BITS_F225"];
        
        getCDC(makeKey(document.getElementById("bitsid").value));
    }

    return(
        <Card className="section mt-5">
            <Card.Body>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={1} className="p-0">
                            <i className="fa fa-plus-circle fa-3x"></i>
                        </Col>
                        <Col xs={10}>                            
                            <Card.Title className="text-center m-0">FILL CDCs</Card.Title>
                        </Col>                        
                    </Row>
                    <Row>                        
                        <InputGroup className="mt-2">
                            <Form.Control id="bitsid" placeholder="BITS ID"/>
                            <InputGroup.Append>
                                <Button onClick={onFill}>FILL</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}