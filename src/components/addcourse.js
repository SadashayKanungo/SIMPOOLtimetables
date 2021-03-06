import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import AutoSuggest from 'react-autosuggest';
import'./autosuggest.css';

const getSuggestionValue = suggestion => suggestion.replace('_',' ');

const renderSuggestion = suggestion => (
    <div>
        {suggestion.replace('_',' ')}
    </div>
);


class AddCourse extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            value : '',
            suggestions : []
        };
    }    

    onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.toUpperCase();
        const inputLength = value.length;
      
        const suggestions = inputLength === 0 ? [] :
            this.props.availableCourses
            .map(crscode => (crscode.replace('_', ' ') +'_'+ this.props.data[crscode].name))
            .filter(crsCodeName =>
                (crsCodeName.split('_')[0].slice(0,inputLength) === inputValue || crsCodeName.split('_')[1].slice(0,inputLength) === inputValue)
            )
            .slice(0,5);
      
        this.setState({
            suggestions: suggestions
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder : 'Search',
            value,
            onChange : this.onChange
        };

        return(
            <Card className="section mt-5 p-1">
            <Card.Body>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={1} className="p-0">
                            <i className="fa fa-plus-circle fa-3x"></i>
                        </Col>
                        <Col xs={10}>                            
                            <Card.Title className="m-0">ADD COURSE</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <AutoSuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        );
    }
}

export default AddCourse;