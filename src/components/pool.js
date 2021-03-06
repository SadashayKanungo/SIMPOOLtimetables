import React from 'react';
import Course from './course.js';
import AddCourse from './addcourse';
import {Card, Container, Row, Col, ListGroup,Form} from 'react-bootstrap';
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
    function onNosChange(event){
        props.modifyPoolList("poolNos",props.poolIndex,null,null,event.target.value)
    }

    const PoolHandle = SortableHandle(()=> (<i className="fa fa-sort fa-2x" style={{transform:"rotate(90deg)"}}></i>));

    return(
        <Card className="pool" style={{width:"18rem", minHeight:"22rem"}}>
            <Card.Body className="p-2">
                <Container fluid>
                    <Row>
                        <Col xs={1} className="p-0">
                            <i className="fa fa-times-circle fa-2x" onClick={onDel}></i>
                        </Col>
                        <Col xs={6} className="align-items-center">
                            <Card.Title className="m-0 mt-1">{props.pool.name}</Card.Title>
                        </Col>
                        <Col xs={4}>
                        <Form.Control className="nosinput p-1 text-center" as="select" onChange={onNosChange} value={props.pool.nos}>
                            {props.pool.courses.map((crs,i)=>(<option key={i} value={i+1}>{i+1}</option>))}
                        </Form.Control>
                        </Col>
                        <Col xs={1} className="p-0">
                            <PoolHandle />
                        </Col>
                    </Row>
                </Container>

                <SortableCourseList courses={props.pool.courses} data={props.data} poolIndex={props.poolIndex} modifyPoolList={props.modifyPoolList}
                    helperClass="course text-center" onSortEnd={onSortEnd} useDragHandle/>

                <AddCourse poolList={props.poolList} data={props.data} availableCourses={props.availableCourses}/>

            </Card.Body>
        </Card>
    );
}