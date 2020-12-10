import React, { Component } from 'react';
import { Container, Card, Row, Col, CardBody, Button } from 'reactstrap';

import LoginButton from './LoginButton';
import SignupButton from './SignupButon';

class ErrProfile extends Component {
  render()
   {
    return (
        <div style={{margin:"150px"}}>
            <Card>
                <div style={{padding:"100px"}}>
                <Container>
                    <Row>
                        <Col sm="2">
                            <img src="https://img.icons8.com/nolan/64/movie.png"
                                style={{width:"110px",height:"auto"}} />
                        </Col>
                        <Col>
                        <h2>
                            Login To View Your Profile.
                        </h2><br />
                        <Row>
                            <Col sm="4">
                                <LoginButton />
                            </Col>
                            <Col sm="4">
                                <SignupButton />
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
                </div>
            </Card>
        </div>
    );
   };
}

export default ErrProfile