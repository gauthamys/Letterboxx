// Sign up form with username email and password fields
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, Container, Row, Col, Card, CardHeader, Jumbotron} from 'reactstrap';
import { InputGroupAddon, InputGroupText } from 'reactstrap';
import axios from 'axios';

class AppSignup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }
    handleChange = event =>{
        this.setState({
            [event.target.name] :event.target.value
        })
    }
    handleSubmit = event =>{
        alert('submitting');
        axios.post('http://localhost:5000/api/users',this.state)
            .then(response =>{
                alert('signed up as '+response.data.username);
                localStorage.setItem('user',JSON.stringify(response.data));
                console.log(localStorage);
            }).catch(err => console.log(err))
        event.preventDefault();
    }
    render(){
        return(
            <div style={{margin:"150px"}}>
                <Container>
                <Row>
                <Col sm="6" offset="3">
                    <Card>
                        <CardHeader className="mb-3" tag="h4">
                            <Row>
                            <Col sm='10'>
                                Sign Up
                            </Col>
                            <Col style={{textAlign:'right'}}>🖊️</Col>
                            </Row>
                        </CardHeader>
                        <Container>
                            <Form onSubmit={this.handleSubmit} method="post">
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input onChange={this.handleChange} type="text" name="username" id="username" placeholder="username" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Password" />
                                </FormGroup>
                                <FormGroup class="mb-3 mt-4">
                                    <Button>Submit</Button>
                                </FormGroup>
                                <p>Already Have an account? Click <a href='/login'>here</a> to login.</p>
                            </Form>
                        </Container>
                    </Card>
                </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default AppSignup;
