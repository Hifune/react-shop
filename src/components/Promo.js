import React, {useState} from 'react';
import Slaiderbox from './Slaiderbox';
import SliderInfo from './SliderInfo'
import './Promo.css';

function Promo() {

  const[isInfo, setIsInfo] = useState (false)

  return (
    <div className="Promo">
        <Slaiderbox setIsInfo={setIsInfo} isInfo={isInfo}/>
        { isInfo ? <SliderInfo/> : null }
    </div>
  );
}

export default Promo;