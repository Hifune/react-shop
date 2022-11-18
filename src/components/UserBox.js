import React from 'react';
import avatar from '../foto/123.png'
import './UserBox.css';

function UserBox() {
  return (
    <div className="UserBox">
        <img src={avatar}/>
        <p>Гость</p>
        <div className='UserBox__controls'>
            <ul>
                <li>Регистрация</li>
                <li>Вход</li>
            </ul>
        </div>
    </div>
  );
}

export default UserBox;