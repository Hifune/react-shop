import React from 'react';


function Registration() {
  return (
        <>
            <h1>Регистрация</h1>
            <input type='text' placeholder='Введите логин'/>
            <input type='password' placeholder='Введите пароль'/>
            <input type='email'placeholder='Введите почту'/>
            <button>Зарегестрироваться</button>
        </>
  )
}

export default Registration;