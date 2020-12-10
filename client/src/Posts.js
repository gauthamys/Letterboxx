import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import Stars from './components/Stars';

export class PostsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        var url = this.props.url;
        axios.get(url).then(res=>{
            this.setState({
                posts: res.data
            })
        }).catch(e=>console.log(e));
    }
    render(){
        return(
            <Container>
            <div style={{display:"grid", gridTemplateColumns:"50% 50%", padding:"10px",textAlign:"left"}}>
                <Posts items={this.state.posts} size={this.props.size}/>
            </div>
            </Container>
        )
    }
}


    
export const Posts = (props) =>{
    return(
        props.items.slice(0, props.size ? props.size : -1).map((item)=>{
            const colors = ['lightblue','lightgreen','yellow']
            var color = colors[Math.floor(Math.random()*3)];
            return(
                <div key={item.id} className="grid-item" style={{borderRadius:"10px", backgroundColor:color, justifyContent:"left"}}>
                    <div style={{padding:"20px"}}>
                    <h3 style={{fontStyle:"oblique"}}>{item.title} | {item.movie}</h3>
                    <h4 style={{fontStyle:"italic"}}>@{item.username}</h4>
                    <p style={{fontFamily:"consolas", textAlign:"center"}}>{item.date}</p>
                    <b style={{textAlign:"left", marginTop:"10px"}}>{item.body}</b>
                    <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto auto", justifyContent:"left"}}>
                        <Stars stars={item.stars}/>
                    </div>
                    </div>
                </div>
            )
        })
    )
}
        
