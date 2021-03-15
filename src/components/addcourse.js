import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import AutoSuggest from 'react-autosuggest';
import'./autosuggest.css';

const getSuggestionValue = suggestion => suggestion.replace('_', " : ");

const renderSuggestion = suggestion => (
    <div style={{marginLeft:"5px", textAlign:"left"}}>
        {suggestion.replace('_'," : ")}
    </div>
);


export default function AddCourse(props){
 const [value,setvalue]=useState('');
 const [suggestions,setsuggestions]=useState([]); 

   const  onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.toUpperCase();
        const inputLength = value.length;
      
        const suggestions = inputLength === 0 ? [] :
            props.availableCourses
            .map(crscode => (crscode.replace('_', ' ') +'_'+ props.data[crscode].name))
            .filter(crsCodeName =>
                (crsCodeName.split('_')[0].slice(0,inputLength) === inputValue || crsCodeName.split('_')[1].slice(0,inputLength) === inputValue)
            )
            .slice(0,5);
      
            setsuggestions(suggestions);

    };
    const   onSuggestionsClearRequested = () => {
        setsuggestions([]);
    };

    const onChange = (event, { newValue }) => {
    setvalue(newValue);
    };

    const onAdd = () => {
        if(value.includes(" : "))
            props.modifyPoolList("courseAdd", props.poolIndex, null, null, value.split(" : ")[0].replace(' ','_'));
    }

        const inputProps = {
            placeholder : 'Search',
            value,
            onChange : onChange
        };

        return(
            <Card className="section mt-5">
            <Card.Body>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={1} className="p-0">
                            <i className="fa fa-plus-circle fa-3x"></i>
                        </Col>
                        <Col xs={10}>                            
                            <Card.Title className="text-center m-0">ADD COURSE</Card.Title>
                        </Col>                        
                    </Row>
                    <Row>
                        <AutoSuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />
                    </Row>
                    <Row className="justify-content-center mt-1">
                        <Button size="sm" onClick={onAdd}>ADD</Button>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        );
}

