import React, { Component } from 'react';
import { Container,Card } from 'reactstrap';
import { Media,CardBody } from 'reactstrap';
import axios from 'axios';

class Stars extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const stars = Math.round(this.props.stars);
        const lis=[];
        for(var i=0;i<stars;i++){
            lis.push(
                <div>
                    <p>⭐</p>
                </div>
            )
        }
        return(
            lis.map((star)=>{
                return star
            })
        )
    }
}


//import Post from '../src/Post'
const colors = ['lightblue','lightgreen','yellow']
var color = colors[Math.floor(Math.random()*3)];

const Review =({reviews}) =>{
    return reviews.map(review =>{
      return (
      <Container>
         <div key={review.id} className="grid-item" style={{borderRadius:"10px", backgroundColor:color, justifyContent:"left"}}>
                    <div style={{padding:"20px"}}>
                    <h3 style={{fontStyle:"oblique"}}>{review.title} | {review.movie}</h3>
                    <p style={{fontFamily:"consolas", textAlign:"center"}}>{review.date}</p>
                    <b style={{textAlign:"left", marginTop:"10px"}}>{review.body}</b>
                    <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto auto", justifyContent:"left"}}>
                         <Stars stars={review.stars}/>
                    </div>
                    </div>
                </div>
                    
        
      </Container>
      )
            
          
     
      
    })
}

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/posts/user/'+this.props.user.username.slice(1)).then((res)=>{
            this.setState({ 
                reviews: res.data
            })
        })
    }
    render(){
        console.log(this.props.user);
        return (
            <div style={{margin:"150px",}}>
            <Container>
                <Card>  
                <Media>
                    <img src={this.props.user.avatar}
                        style={{borderRadius:"50%",padding:"50px"}} height='20%' width="20%"
                        alt="Avatar" />
                    <div style={{padding:"50px"}}>
                    <h1>{this.props.user.username}</h1>
                    <p className='ml-5 mt-1'>bio</p>
                    </div>
                </Media>
                <div style={{padding:"50px"}}>
                <h3>Reviews</h3>         
                    
                    <CardBody>
                        <Review reviews= {this.state.reviews}/>
                    </CardBody>
                </div>
                </Card>
            </Container>
            </div>
        );
    };
}

export default Profile;