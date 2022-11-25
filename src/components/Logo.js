import React from 'react';
import logo from '../foto/123.png'
import './Logo.css';

function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt=""/>
      <p>Магазин</p>
    </div>
  )
}

export default Logo;