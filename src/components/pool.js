import React from 'react';
import Course from './course.js';
import {Card} from 'react-bootstrap';

class Pool extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};//course list
    }

    render() {
        return(
            //render course list
            <Card className="pool d-inline-block mr-3" style={{width:"15rem", minHeight: "20rem", flex: "0 0 auto"}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Course />
                    <Course />
                    
                </Card.Body>
            </Card>
        );
    }
}

export default Pool;