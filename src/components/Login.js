import React from 'react';


function Login() {
  return (
        <>
            <h1>Войти</h1>
            <input type='text' placeholder='Введите логин'/>
            <input type='password' placeholder='Введите пароль'/>
            <button>Войти</button>
        </>
  )
}

export default Login;