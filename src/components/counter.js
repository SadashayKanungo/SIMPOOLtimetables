import React from 'react';
import{CardDeck, Card} from 'react-bootstrap';
import CountUp from 'react-countup';

class Counter extends React.Component{
    state = {
        count : {students:10,lists:20,tables:100},
        loading : true
    }
/*
    async componentDidMount() {
        const count = await fetch(this.props + "/count").json();
        this.setState({loading : false, count : count});
    }
*/
    render() {
        return(
            <CardDeck className="text-center" style={{height:'100%'}}>
                <Card>
                    <Card.Body class="p-2">
                        <Card.Title>
                            <CountUp end={this.state.count.students} />
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer class="p-0"><strong>STUDENTS</strong></Card.Footer>
                </Card>
                <Card>
                    <Card.Body class="p-2">
                        <Card.Title>
                                <CountUp end={this.state.count.lists} />
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer class="p-0"><strong>LISTS</strong></Card.Footer>
                </Card>
                <Card>
                    <Card.Body class="p-2">
                        <Card.Title>
                            <CountUp end={this.state.count.tables} />
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer class="p-0"><strong>TABLES</strong></Card.Footer>
                </Card>
            </CardDeck>
        );
    }
}

export default Counter;