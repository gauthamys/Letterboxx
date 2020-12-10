import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const StarRating = (props) => {
    const [rating, setRating] = useState(null);
    return (
        <div style={{padding:"10px", justifyContent:"right", width:"100%"}}>
            {[...Array(5)].map((star,i) =>{
                const ratingValue = i+1;
                return(
                    <label> 
                        <input type="radio" name="rating" value={ratingValue} 
                            onClick={()=>setRating(ratingValue)} style={{display:"none"}} />
                        <FaStar className="star" 
                            color={ratingValue <= rating ? "orangered" : "e4e5e9"} 
                            size={20} style={{margin:"10px", marginBottom:"auto"}}/>
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating;