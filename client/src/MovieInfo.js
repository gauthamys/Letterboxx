import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Button, Col, Row, Input, Form, Spinner } from 'reactstrap'; 
import './App.css';
import { Posts } from './Posts';
import { FaStar } from 'react-icons/fa';

const ReviewTag = ({ user }) =>{
    return !user ? <p><em>write a review as @anonymous</em></p> : <p><em>What does <b>{user.username}</b> think?</em> 💭</p>
}

const Cast = ({cast}) =>{
    return cast.map((person) => {
        return <p style={{padding:"5px", paddingLeft:"0px"}}> person </p>
    })
}

export default class MovieInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            userReview: '',
            title: '',
            stars: 0,
            movie: [],
            cast:[],
            posts: [],
            isSubmitted: 0
        }
        this.revChange = this.revChange.bind(this);
        this.revSubmit = this.revSubmit.bind(this);
        this.starHandler = this.starHandler.bind(this);
    }
    starHandler(e){
        this.setState({
            stars: e.target.value
        })
    }
    revChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }
    resetForm(e){
        e.target.resetFields();
    }
    revSubmit(e){
        e.preventDefault();
        const postRev = {
            movie:this.state.movie.name,
            movieId: this.props.match.params.id,
            username: this.props.user ? this.props.user.username.slice(1) : 'anonymous',
            title: this.state.title,
            body: this.state.userReview,
            stars: this.state.stars
        }
        //post the review to 
        // 1. api/posts (post)
        // 2. api/users : reviews (append) (put)
        // 3. api/movies : reviews (append) (put)
        try{
            axios.post('http://localhost:5000/api/posts/', postRev).then(res => {
                this.setState({
                    isSubmitted: this.state.isSubmitted + 1
                })
            })
            axios.put('http://localhost:5000/api/users/review/'+this.props.user._id+'/'+this.props.match.params.id, postRev);
        } catch {
            this.setState({
                error:'something went wrong'
            })
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.isSubmitted != this.state.isSubmitted){
            axios.get('http://localhost:5000/api/posts/movie/'+this.props.match.params.id).then(res => {
                this.setState({
                    isLoaded:true,
                    posts: res.data
                })
            })
        }
    }
    componentDidMount(){

        // GET movie to be loaded (mrouter)
        axios.get('http://localhost:5000/api/movies/movie/'+this.props.match.params.id).then(res => {
            this.setState({
                isLoaded: true,
                movie: res.data,
                cast: res.data.cast
            })
            console.log(this.state.movie.cast);
        })

        // GET Posts for the movie (prouter)
        axios.get('http://localhost:5000/api/posts/movie/'+this.props.match.params.id).then(res => {
            this.setState({
                isLoaded:true,
                posts: res.data
            })
        })

    }
    render(){
        if(!this.state.isLoaded){
            return(
                <div style={{margin:"130px"}}>
                <Jumbotron>
                    <Spinner color='primary' style={{margin:"100px", justifyContent:"center"}} />
                </Jumbotron>
                </div>  
            )
        }
        return(
            <div style={{margin:"130px"}}>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col sm="4">
                                <img style={{padding:"10px", paddingTop:"0px", borderRadius:"10%"}} src = {this.state.movie.postersrc } alt = {this.state.movie.name} width = "100%" height = "480px" />
                                <p style={{ opacity:"0.7", fontFamily:"monospace", textAlign:"center"}}>{this.state.movie.name}</p>
                            </Col>
                            <Col>
                                <Container>
                                    <h2 style={{padding:"10px"}}>{this.state.movie.name} ({this.state.movie.year})</h2>
                                    <hr />
                                    <div style={{padding:"20px", backgroundColor:"pink", borderRadius:"10px"}}>
                                        <h4>Directed by {this.state.movie.director} | <span className="text-primary">{this.state.movie.genre}</span></h4>
                                        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto auto auto auto", justifyContent:"left"}}>
                                            <b><em>Starring:  </em></b>
                                            {
                                                (this.state.cast).slice(1).map((person) => {
                                                    return <p style={{paddingLeft:"10px"}} className="cast"> {person}, </p>
                                                })
                                            }
                                            <p style={{ paddingLeft:"3px"}} className="cast"> {(this.state.cast)[0]} </p>
                                        </div>
                                        <ReviewTag user={this.props.user}/>
                                        <Form onSubmit={this.resetForm}>
                                            <div style={{padding:"10px", justifyContent:"right", width:"100%"}}>
                                                <label>
                                                    <input type="radio" value={1} onClick={(e)=>this.setState({stars: 1})} style={{display:"none"}} />
                                                    <FaStar size={20} className="star" style={{margin:"10px", marginBottom:"auto"}} 
                                                        color={ this.state.stars >= 1 ? 'orangered' : 'e4e5e9' } />
                                                </label>
                                                <label>
                                                    <input type="radio" value={1} onClick={(e)=>this.setState({stars: 2})} style={{display:"none"}} />
                                                    <FaStar size={20} className="star" style={{margin:"10px", marginBottom:"auto"}} 
                                                        color={ this.state.stars >= 2 ? 'orangered' : 'e4e5e9' } />
                                                </label>
                                                <label>
                                                    <input type="radio" value={1} onClick={(e)=>this.setState({stars: 3})} style={{display:"none"}} />
                                                    <FaStar size={20} className="star" style={{margin:"10px", marginBottom:"auto"}} 
                                                        color={ this.state.stars >= 3 ? 'orangered' : 'e4e5e9' } />
                                                </label>
                                                <label>
                                                    <input type="radio" value={1} onClick={(e)=>this.setState({stars: 4})} style={{display:"none"}} />
                                                    <FaStar size={20} className="star" style={{margin:"10px", marginBottom:"auto"}} 
                                                        color={ this.state.stars >= 4 ? 'orangered' : 'e4e5e9' } />
                                                </label>
                                                <label>
                                                    <input type="radio" value={1} onClick={(e)=>this.setState({stars: 5})} style={{display:"none"}} />
                                                    <FaStar size={20} className="star" style={{margin:"10px", marginBottom:"auto"}} 
                                                        color={ this.state.stars >= 5 ? 'orangered' : 'e4e5e9' } />
                                                </label>
                                            </div>
                                            <Input type="text" value={this.state.title} name="title" placeholder="Title" onChange={this.revChange} required/>
                                            <Input type="textarea" style={{width:"100%",height:"150px"}} placeholder='Write your view here ... ' value = {this.state.userReview} name="userReview" onChange = {this.revChange} rows = {5} cols = {50} maxLength = {140} required/>
                                            <br></br>
                                            <Button onClick={this.revSubmit} className="btn mt-4 btn-success">Publish!</Button>
                                        </Form>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    <div style={{ display:"grid", gridTemplateColumns:"50% 50%", paddingBottom:"20px", paddingTop:"20px", width:"100%"}}>
                        <Posts items={this.state.posts} />
                    </div>
                </Jumbotron>
            </div>
        )
    }
}