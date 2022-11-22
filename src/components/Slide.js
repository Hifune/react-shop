import React from 'react';
import './Slide.css';

function Slide({image}) {

  return (
    <div className="Slide">
     <img src={image} alt='Slide'/>
    </div>
  )
}

export default Slide