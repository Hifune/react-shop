import React from 'react';
import Header from './components/Header';
import Promo from './components/Promo';
import ModalBox from './components/ModalBox';
import Registration from './components/Registration';
import Login from './components/Login';
import './App.css';

import { connect } from "react-redux"

function App({isOpenModalBox}) {

  const boxes = {
    registration: <Registration/>,
    login: <Login/>
  }



  return (
    <div className="App">
      <Header/>
      <Promo/>
      { isOpenModalBox !== 'none' ? <ModalBox>{boxes[isOpenModalBox]}</ModalBox> : null }
    </div>
  );
}

function mapStateToProps(state){
  return{
    isOpenModalBox: state.getIsOpenModalBox.isOpenModalBox
  }
}

export default connect(mapStateToProps, null) (App);;
