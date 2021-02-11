import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default (props) => {
    return(    
        <Container fluid className="footer mt-4 text-center align-items-center">
            <Row>
                <Col xs={12} md={{span:4, order:2}} className="p-2">
                <i className="text-center">Made with <i className="fa fa-heart"></i> by f20190248</i>  
                </Col>

                <Col xs={{span:3, offset:3}} md={{span:4, order:1, offset:0}}>
                <a href="https://github.com/SadashayKanungo" target="blank"><i className="mt-2 fa fa-github-square fa-2x"></i></a>
                </Col>
                
                <Col xs={3} md={{span:4, order:3}}>
                <a href="https://www.linkedin.com/in/sadashay-kanungo-22a4321a0/" target="blank"><i className="mt-2 fa fa-linkedin-square fa-2x"></i></a>
                </Col>
            </Row>   
        </Container>
    );
}