import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default (props) => {
    return(        
        <Container fluid className="footer text-center align-items-center">
            <Row>
                <Col xs={12} md={{span:4, order:2}} className="p-2">
                <span className="text-center">Made with &#x2764; by f20190248</span>  
                </Col>

                <Col xs={{span:3, offset:3}} md={{span:4, order:1, offset:0}}>
                <a href="https://github.com/SadashayKanungo"><i className="mt-2 fa fa-github-square fa-2x"></i></a>                
                </Col>
                
                <Col xs={3} md={{span:4, order:3}}>
                <a href="https://www.linkedin.com/in/sadashay-kanungo-22a4321a0/"><i className="mt-2 fa fa-linkedin-square fa-2x"></i></a>
                </Col>
            </Row>   
        </Container>
    );
}