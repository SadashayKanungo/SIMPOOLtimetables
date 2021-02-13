import React from 'react';
import {Card, Container, ListGroup, Row, Col, Accordion} from 'react-bootstrap';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

import Section from './section.js';

const SortableSection = SortableElement((props) => (
    <ListGroup.Item className="section p-0 mb-1 rounded">        
        <Section {...props} />
    </ListGroup.Item>
));

const SortableSectionList = SortableContainer(({sections,data,poolIndex,courseIndex,modifyPoolList}) => {
  return (
    <ListGroup >
      {sections.map((sec, index) => (
        <SortableSection key={sec} index={index}
            secid={sec} data={data} poolIndex={poolIndex} courseIndex={courseIndex} sectionIndex={index} modifyPoolList={modifyPoolList}/>
      ))}
    </ListGroup >
  );
});

export default (props) => {
    function onSortEnd({oldIndex, newIndex}) {
        props.modifyPoolList("sectionMove", props.poolIndex, props.courseIndex, oldIndex, newIndex);
    }
    function onDel(){
        props.modifyPoolList("courseDel",props.poolIndex,null,props.courseIndex,null);
    }

    const CrsHandle = SortableHandle(()=> (<i className="fa fa-sort fa-2x"></i>));

    return(
        
        <Card className="course p-1">
            <Accordion>
                <Container fluid>
                    <Row>
                        <Col xs={1} className="p-0">
                            <i className="fa fa-times-circle fa-2x" onClick={onDel}></i>
                        </Col>
                        <Accordion.Toggle xs={10} as={Col} eventKey="0">
                            <Card.Title style={{whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>{props.data[props.course[0].split(' ')[0]].name}</Card.Title>
                            <Card.Subtitle>{props.course[0].split(' ')[0].replace('_',' ')}</Card.Subtitle>
                        </Accordion.Toggle>
                        <Col xs={1} className="p-0">
                            <CrsHandle />
                        </Col>
                    </Row>
                </Container>

                <Accordion.Collapse eventKey="0">
                    <SortableSectionList sections={props.course} data={props.data} poolIndex={props.poolIndex} courseIndex={props.courseIndex} modifyPoolList={props.modifyPoolList}
                        helperClass="section text-center" onSortEnd={onSortEnd} useDragHandle/>
                </Accordion.Collapse>
            </Accordion>
        </Card>
    );
    
}