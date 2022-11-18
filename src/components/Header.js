import React from 'react';
import Logo from './Logo'
import UserBox from './UserBox';
import './Header.css';
import Navigation from './Navigation';

function Header() {
  return (
    <div className="Header">
      <Logo/>
      <Navigation/>
      <UserBox/>
    </div>
  );
}

export default Header;