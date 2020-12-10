// Some code i copy pasted from "https://reactstrap.github.io/components/carousel/"
// takes an array of Movie objects passed as props

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css'

const AppSlides = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.items.map((item) => {
    return (
      <CarouselItem key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div> 
        <a href={`/movie/${item._id}`}>
          <img src={item.src} alt={item.altText} style={{width:'100%',height:'550px', opacity:'0.8', borderRadius:"30px"}} key={item.id}/>
        </a>
        <h1 style={{position:'absolute', top:'280px', left:'200px', textAlign:"center", backgroundColor:"black", padding:"20px", color:'#fff'}}>{item.name}</h1>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={props.items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default AppSlides;