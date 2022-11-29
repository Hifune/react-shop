import React from 'react';
import Slaiderbox from './Slaiderbox';
import SliderInfo from './SliderInfo'
import './Promo.css';

import { connect } from "react-redux"

function Promo({isInfo}) {

  let info = {
    'slide1': 'Вы нажали на Слайд 1',
    'slide2': 'Вы нажали на Слайд 2',
    'slide3': 'Вы нажали на Слайд 3',
  }

  return (
    <div className="Promo">
        <Slaiderbox/>
        { isInfo !== '' ? <SliderInfo text={info[isInfo]}/> : null }
    </div>
  );
}

function mapStateToProps(state){
  return{
    isInfo: state.getIsInfo.isInfo
  }
}

export default connect(mapStateToProps, null) (Promo);