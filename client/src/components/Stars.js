import React, { Component } from 'react';

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

export default Stars;