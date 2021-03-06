import React from 'react';
import {Card, Container, Row, Col, Form,InputGroup,Button} from 'react-bootstrap';


export default (props) => {
    function onAdd(){
        function makeUnique(name,poolList){
            for (var pool of poolList){
                if (pool.name === name) return makeUnique(name + " NEW");
            }
            return name;
        }        
        props.modifyPoolList("poolAdd",null,null,null,makeUnique(document.getElementById("newpoolname").value, props.poolList));
    }

    return(
        <Card className="addpool d-inline-block mb-3 mr-3" style={{width:"18rem", height: "22rem", flex: "0 0 auto"}}>
            <Card.Body style={{ height: "100%"}} className="p-2 d-flex flex-column justify-content-around">
                
                <Card className="section">
                                            
                        <Container fluid>
                            <Card.Body>
                            <Row className="align-items-center">
                                <Col xs={1} className="p-0">
                                    <i className="fa fa-plus-circle fa-3x"></i>
                                </Col>
                                <Col xs={10}>                            
                                    <Card.Title className="m-0">ADD NEW PooL</Card.Title>
                                </Col>
                            </Row>
                            <Row>
                                <InputGroup className="mt-2">
                                    <Form.Control id="newpoolname" defaultValue={"Pool "+(props.poolList.length+1)}/>
                                    <InputGroup.Append>
                                        <Button onClick={onAdd}>ADD</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Row>
                            </Card.Body>
                        </Container>
                    
                </Card>
                
                <Card className="section">
                    <Card.Body>
                        <Container fluid>
                    <Row className="align-items-center">
                        <Col xs={1} className="p-0">
                            <i className="fa fa-check-circle fa-3x"></i>
                        </Col>
                        <Col xs={10}>
                            <Card.Title className="m-0">SUBMIT PooLS</Card.Title>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
}