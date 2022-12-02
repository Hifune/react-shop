import React from 'react';
import avatar from '../foto/123.png'
import './UserBox.css';

import { connect } from "react-redux"
import setIsOpenModalBoxAction from '../store/actions/isOpenModalBoxAction'

function UserBox({setIsOpenModalBoxFunction}) {

function openModalBox(){
  setIsOpenModalBoxFunction(true)
}
  return (
    <div className="UserBox">
        <img src={avatar} alt=""/>
        <p>Гость</p>
        <div className='UserBox__controls'>
            <ul>
                <li onClick={openModalBox}>Регистрация</li>
                <li onClick={openModalBox}>Вход</li>
            </ul>
        </div>
    </div>
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