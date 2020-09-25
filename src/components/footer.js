import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default (props) => {
    return(        
        <Container fluid className="footer text-center">
            <Row>
                <Col xs={12} md={{span:4, order:2}}>
                <span style={{width:"100%", fontSize:"125%"}} className="text-center">&#9679; Made with &#10084; by SK &#9679;</span><br/>            
                </Col>

                <Col xs={12} md={{span:4, order:1}}>
                <a href="https://github.com/SadashayKanungo"><i className="fa fa-github-square fa-2x"></i></a><br/>
                <span style={{width:"100%"}}>Check out the Source Code</span>
                </Col>
                
                <Col xs={12} md={{span:4, order:3}}>
                <a href="https://www.linkedin.com/in/sadashay-kanungo-22a4321a0/"><i className=" fa fa-linkedin-square fa-2x"></i></a><br/>
                <span style={{width:"100%"}}>Reach out for Feedback</span>
                </Col>
            </Row>   
        </Container>
    );
}