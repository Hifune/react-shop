import React from 'react';
import './Slide.css';

function Slide({image, id}) {

  function getInfo(){
    setIsInfo(!isInfo)
  }

  return (
    <div className="Slide">
     <img  id={`slide${id}`} src={image} onClick={getInfo} alt='Slide'/>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    setIsInfoFunction: isInfo => {
      dispatch(setModalWindowAction(modalWindow))
    }
  }
}

export default Slide