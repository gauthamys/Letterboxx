import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component {
    constructor(props){
        super(props);
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
    }
    mouseOverHandler(event){
        event.target.style.opacity = "0.6";
    }
    mouseOutHandler(e){
        e.target.style.opacity = "1";
    }
    render(){
        return(
            <div>
                <a href={`/movie/${this.props.id}`}>
                <img src={this.props.src} alt={this.props.name} height="484px" width="324px" style={{borderRadius:"10%"}} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} />
                </a>
            </div>
        )
    }
}

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            movies:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/movies').then(response => {
            this.setState({
                movies: response.data,
                loading: false
            })
        })
    }
    render(){
        return(
            this.state.movies.map((item)=>{
                return (
                    <div className="grid-item">
                        <Movie src={item.postersrc} year={item.year} key={item.id} name={item.name} id={item._id}/>
                    </div>
                )
            })
        )
    }
}

class MoviesPage extends Component{
    render(){
        return(
            <div>
            <section style={{textAlign:"center", width:"50%", margin:"auto",borderRadius:"20px", marginTop:"150px",backgroundColor:"grey"}}>
                <div style={{display:"grid", gridTemplateColumns:"auto auto auto", color:"white", fontFamily:'consolas'}}>
                    <h3 style={{backgroundColor:"orangered", borderTopLeftRadius:"20px", padding:"30px", borderBottomLeftRadius:"20px"}}>Collection</h3>
                    <h3 style={{backgroundColor:"green", padding:"30px"}}>Collection</h3>
                    <h3 style={{backgroundColor:"blue", padding:"30px", borderTopRightRadius:"20px", opacity:"0.7", borderBottomRightRadius:"20px"}}>Collection</h3>
                </div>
                <div style={{
                        display:"grid", 
                        gridTemplateColumns:"auto auto min-content auto", 
                        justifyContent:"space-evenly",
                        gridGap:"20px"}} className="mt-5 mb-5"> 
                    <Movies />
                </div>
            </section>
            </div>
        )
    }
}

export default MoviesPage;