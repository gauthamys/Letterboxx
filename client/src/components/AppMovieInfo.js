// TO DO props required, movie id, user - username

import React, { Component } from 'react';
import { Container, Jumbotron} from 'reactstrap';

import axios from 'axios';
class AppMovieInfo extends Component{

    constructor(props,context){
        super(props,context);

        this.state= {
            isLoaded : false,
            mvId : "",
            movie : [],
            cast : [],
            userUrl : "",
            userReview : ""
        };
        this.revChange = this.revChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        this.setState({
            mvId : this.props.mvId
        })
        var urlGet = "http://localhost:5000/api/movies/"+this.state.mvId // add with props later
        axios.get(urlGet).then((response)=>{
            var obj = JSON.parse(JSON.stringify((response.data)[0]));
            var mres = [obj.cast, obj.altText, obj.src, obj.year, obj.name, 
                obj.genre, obj.director, obj.postersrc];
            
       
            this.setState({
                isLoaded: true,
                movie: mres,
                cast : [mres[0][0],mres[0][1]]
            })
            console.log((this.state.cast))
           
        })
        this.setState({
            userUrl : "http://localhost:5000/api/users/"+this.props.userIdd
        })
        
        axios.get(this.state.userUrl).then((response)=>{
            var obj1 = JSON.parse(JSON.stringify((response.data)));
            var ures = obj1.this.state.mvId;
            
            this.setState({
                userReview : ures
            })
           
        })

    }  
    revChange(event) {
        this.setState({ userReview : event.target.value });
    }
handleSubmit(event) {

        axios.put("review/"+this.state.userUrl+"/"+this.state.mvId,this.state.userReview)
      }

render(){
        return(
            <div>
               
                <Jumbotron>
                    <Container>
                    <h1>{this.state.movie[4]}({this.state.movie[3]})</h1>
                    <hr ></hr>
                    <img src = {this.state.movie[2] } alt = {this.state.movie[5]} width = "70%" height = "70%" />
                    <div><br></br></div>
                    <h4>Directed by {this.state.movie[6]}</h4>
                    <h5>Cast : {this.state.cast[0]}, {this.state.cast[1]}</h5>  
                    <p><em>My review</em></p>

                    <form onSubmit={this.handleSubmit}>
                        <textarea value = {this.state.userReview} onChange = {this.revChange} rows = {5} cols = {50} maxLength = {140}/>
                        <br></br>
                        <input type="submit" value="Publish!" />
                    </form>
                    </Container>
                </Jumbotron>
                
            </div>
        );
    }
    
}

export default AppMovieInfo;                 