import React from 'react';
import {Container,Row,Col,Accordion} from 'react-bootstrap';
import {SortableHandle} from 'react-sortable-hoc';

export default (props) => {
    function lookup(id){
        let [c,s] = id.split(' ');
        return props.data[c].sec[s];
    }
    function onDel(){
        props.modifyPoolList("sectionDel",props.poolIndex,props.courseIndex,props.sectionIndex,null);
    }

    const SecHandle = SortableHandle(()=> (<i className="fa fa-sort fa-2x"></i>));

    return(        
        <Container fluid>
            <Accordion>
                <Row className="p-1">
                    <Col xs={1} className="p-0">
                        <i className="fa fa-times-circle fa-2x" onClick={onDel}></i>
                    </Col>
                    <Accordion.Toggle xs={9} className="sectiontitle" as={Col} eventKey="0">
                        <strong>{props.secid.split(' ')[1].replace(/\+/g,' ')}</strong>
                    </Accordion.Toggle>                             
                        
                    <Col xs={1}>
                        <SecHandle />
                    </Col>
                </Row>
                <Accordion.Collapse eventKey="0">
                    <>{
                        
                        lookup(props.secid).instructor.split('+').map((ins,i)=>
                            <Row key={i} className="font-weight-bold">
                                <Col xs={1} className="text-right p-0">
                                    {props.secid.split(' ')[1].split('+')[i]}
                                </Col>
                                <Col xs={8} className="instructors text-left">
                                    {ins}
                                </Col>
                                <Col xs={2} className="text-center p-0">
                                    {lookup(props.secid).timecode.split('+')[i]}
                                </Col>
                            </Row>
                        )
                        
                    }</>
                </Accordion.Collapse>
            </Accordion>
        </Container>
    );
}