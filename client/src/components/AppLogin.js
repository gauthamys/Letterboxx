// Renders a basic form with email and password fields

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import { Card, CardHeader, Jumbotron} from 'reactstrap';

class AppLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.hadnleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hadnleSubmit(e){
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        axios.get('http://localhost:5000/api/users/'+email).then(res => {
            console.log(res.data);
            if(res.data.length > 0){
                if(password == res.data[0].password){
                    localStorage.setItem('user', JSON.stringify(res.data));
                    window.location.reload();
                }
                else{
                    alert('something went wrong');
                }
            } else {
                alert("user doesn't exist, please sign up");
            }
            
        })
    }
    render(){
        return (
            <div style={{margin:"150px"}}>
                <Container>
                <Row>
                <Col sm="6" offset="3">
                    <Card>
                        <CardHeader className="mb-3" tag="h4">
                            <Row>
                                <Col sm="10">
                                    Login
                                </Col>
                                <Col style={{textAlign:'right'}}>
                                🔐
                                </Col>
                            </Row>
                        </CardHeader>
                        <Container>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                </FormGroup>
                                <FormGroup class="mb-3 mt-4">
                                    <Button>Submit</Button>
                                </FormGroup>
                            </Form>
                            <p>Don't have an Account? Click <a href="/signup">here</a> to sign up.</p>
                        </Container>
                    </Card>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default AppLogin;