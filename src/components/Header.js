import React from 'react';
import Logo from './Logo'
import UserBox from './UserBox';
import './Header.css';
import Navigation from './Navigation';

function Header({isAuth, setIsAuth}) {
  return (
    <div className="Header">
      <Logo/>
      <Navigation/>
      <UserBox isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default Header;