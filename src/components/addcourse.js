import React from 'react';
import { Card } from 'react-bootstrap';


class AddCourse extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            
        };
    }

    render() {
        return(
            <Card className="course mt-2 p-1">
            <Card.Body>
                <Card.Title>ADD COURSE</Card.Title>
                        
                    
                        
                    
            </Card.Body>
        </Card>
        );
    }
}

export default AddCourse;