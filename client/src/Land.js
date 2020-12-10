import MoviesPage from './MoviesPage';
import React, { Component } from 'react';
import {PostsContainer as Posts} from './Posts';
import Home from './Home';

const Land = () => {
    return(
        <div>
            <div style={{display: "grid", gridTemplateColumns:"auto",justifyContent:"center", marginTop:"150px"}}>
                <div className="grid-item" style={{ 
                            backgroundColor:"pink", 
                            textAlign:"center",  
                            padding:"10px",
                            borderRadius:"5%"
                        }}>
                    <section style={{margin:"10px", padding:"8px"}}>
                        <h1 style={{fontFamily:"apple",color:"white", backgroundColor:"black",padding:"15px", borderRadius:"20px"}}>Latest Posts</h1>
                    </section><hr style={{borderStyle:"double"}}/><br />
                    <Posts url="http://localhost:5000/api/posts" size={4} />
                    
                </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns:"auto", margin:"100px"}}>
                <div className="grid-item" style={{ 
                            backgroundColor:"white", 
                            textAlign:"center",
                            padding:"10px",
                            marginTop:"30px",
                            borderRadius:"5%"
                        }}>
                    <section style={{margin:"10px", padding:"8px"}}>
                        <h1 style={{fontFamily:"apple"}}>Latest Movies</h1>
                    </section><hr style={{borderStyle:"double"}}/><br />
                    <div style={{width:"100%"}}>
                        <Home />
                    </div>
                </div>
            </div>
            <MoviesPage /><hr />
        </div>
    )
}

export default Land;