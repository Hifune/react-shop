import React from 'react';
import { Link } from "react-router-dom";
import avatar from '../foto/123.png'
import './UserBox.css';

import { connect } from "react-redux"
import setIsOpenModalBoxAction from '../store/actions/isOpenModalBoxAction'

function UserBox({setIsOpenModalBoxFunction, isAuth, setIsAuth}) {

function openModalBox(e){
  let id = e.target.id
  setIsOpenModalBoxFunction(id)
}
  return (
    <>
    { isAuth 
      ? 
      <div className="UserBox">
          <img src={avatar} alt=""/>
          <p>Админ</p>
          <div className='UserBox__controls'>
              <ul>
                  <Link to='/room'><li id='registration'>Профиль</li></Link>
                  <li id='login' onClick={() => setIsAuth(false)}>Выход</li>
              </ul>
          </div>
      </div>
      :
      <div className="UserBox">
          <img src={avatar} alt=""/>
          <p>Гость</p>
          <div className='UserBox__controls'>
              <ul>
                  <li id='registration' onClick={openModalBox}>Регистрация</li>
                  <li id='login' onClick={openModalBox}>Вход</li>
              </ul>
          </div>
      </div>
      }
    </>
  );
}

function mapDispatchToProps(dispatch){
  return {
    setIsOpenModalBoxFunction: isOpenModalBox => {
      dispatch(setIsOpenModalBoxAction(isOpenModalBox))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserBox);