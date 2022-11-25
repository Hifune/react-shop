import React from 'react';
import './Slide.css';

function Slide({image, setIsInfo, isInfo }) {

  function getInfo(){
    setIsInfo(!isInfo)
  }

  return (
    <div className="Slide">
     <img src={image} onClick={getInfo} alt='Slide'/>
    </div>
  )
}

export default Slide