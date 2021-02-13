import React from 'react';
import Course from './course.js';
import {Card, Container, Row, Col, ListGroup} from 'react-bootstrap';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

const SortableCourse = SortableElement((props) => (        
    <ListGroup.Item style={{backgroundColor:"transparent"}} className="p-0 mt-2">
        <Course {...props} />
    </ListGroup.Item>
));

const SortableCourseList = SortableContainer(({courses,data,poolIndex,modifyPoolList}) => {
  return (
    <ListGroup>
      {courses.map((crs, index) => (
        <SortableCourse key={crs[0].split(' ')[0]} index={index}
            course={crs} data={data} poolIndex={poolIndex} courseIndex={index} modifyPoolList={modifyPoolList}/>
      ))}
    </ListGroup>
  );
});


export default (props) => {
    function onSortEnd({oldIndex, newIndex}){
        props.modifyPoolList("courseMove", props.poolIndex, null, oldIndex, newIndex);
    }
    function onDel(){
        props.modifyPoolList("poolDel",null,null,props.poolIndex,null);
    }

    const PoolHandle = SortableHandle(()=> (<i className="fa fa-sort fa-2x" style={{transform:"rotate(90deg)"}}></i>));

    return(
        <Card className="pool" style={{width:"18rem", height:"100%"}}>
            <Card.Body className="p-2">
                <Container fluid>
                    <Row>
                        <Col xs={1} className="p-0">
                            <i className="fa fa-times-circle fa-2x" onClick={onDel}></i>
                        </Col>
                        <Col xs={10}>
                            <Card.Title>{props.pool.name}{/*</Card.Title>*/}
                            {/*<Card.Title>*/}{props.pool.nos}</Card.Title>
                        </Col>
                        <Col xs={1} className="p-0">
                            <PoolHandle />
                        </Col>
                    </Row>
                </Container>

                <SortableCourseList courses={props.pool.courses} data={props.data} poolIndex={props.poolIndex} modifyPoolList={props.modifyPoolList}
                    helperClass="course text-center" onSortEnd={onSortEnd} useDragHandle/>
            
            </Card.Body>
        </Card>
    );
}