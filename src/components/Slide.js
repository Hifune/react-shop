import React from 'react';
import './Slide.css';

import { connect } from "react-redux"
import setIsInfoAction from '../store/actions/isInfoAction'

function Slide({image, id, setIsInfoFunction, isInfo}) {

  function getInfo(e){
    let id = e.target.id
    if (isInfo === ''){
      setIsInfoFunction(id)
    }else{
      setIsInfoFunction('')
    }
  }

  return (
    <div className="Slide">
     <img  id={`slide${id}`} src={image} onClick={getInfo} alt='Slide'/>
    </div>
  )
}

function mapStateToProps(state){
  return{
    isInfo: state.getIsInfo.isInfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    setIsInfoFunction: isInfo => {
      dispatch(setIsInfoAction(isInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);