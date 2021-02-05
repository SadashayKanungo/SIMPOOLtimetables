import React from 'react';
import{CardGroup, Card} from 'react-bootstrap';
import CountUp from 'react-countup';

class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <CardGroup className="text-center" style={{height:'90%'}}>                
                <Card>
                    <Card.Body class="p-2">
                        <Card.Title>
                            {this.props.counter.count ?
                                <CountUp separator="," end={this.props.counter.count.tables} /> :
                                <div>...</div>
                            }
                            
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer class="p-1"><strong>TABLES</strong></Card.Footer>
                </Card>
                <Card>
                    <Card.Body class="p-2">
                        <Card.Title>
                        {this.props.counter.count ?
                                <CountUp separator="," end={this.props.counter.count.students} /> :
                                <div>...</div>
                            }
                            
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer class="p-1"><strong>STUDENTS</strong></Card.Footer>
                </Card>
            </CardGroup>
        );
    }
}

export default Counter;