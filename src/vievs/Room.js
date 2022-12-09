import React from 'react';
import './Room.css';

function Room() {
  return (
    <div className="Room">
      <h1>Личный кабинет</h1>
      <div>
        <div className='Romm__avatar'>
          <img src='' /> 
          <input placeholder='Укажите адрес картинки' ></input>
          <button>Изменить</button>
        </div>
        <div className='Room_info'>
          <p>
            <span>Имя пользователя</span>
            <span>Админ</span>
          </p>
          <p>
            <span>Пароль</span>
            <button>Изменить пароль</button>
          </p>
          <p>
            <input placeholder='Введите старый пароль'/>
            <input placeholder='Введите новый пароль'/>
            <button>Обновить</button>
          </p>
        </div>
      </div>
    </div>
    );
}

export default Room;