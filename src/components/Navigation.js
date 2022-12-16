import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <Link to='/' ><li>Главная</li></Link>
        <Link to='/catalog' ><li>Каталог</li></Link>
        <li>Сотрудники</li>
        <li>Контакты</li>
      </ul>
      
    </div>
  )
}

export default Navigation;