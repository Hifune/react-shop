import React from 'react';
import Header from './components/Header';
import Promo from './components/Promo';
import ModalBox from './components/ModalBox';
import './App.css';

import { connect } from "react-redux"

function App({isOpenModalBox}) {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      { isOpenModalBox ? <ModalBox/> : null }
    </div>
  );
}

function mapStateToProps(state){
  return{
    isOpenModalBox: state.getIsOpenModalBox.isOpenModalBox
  }
}

export default connect(mapStateToProps, null) (App);;
