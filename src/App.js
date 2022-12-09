import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './vievs/Main';
import Room from './vievs/Room';
import ModalBox from './components/ModalBox';
import Registration from './components/Registration';
import Login from './components/Login';
import './App.css';

import { connect } from "react-redux"

function App({isOpenModalBox}) {

  const[isAuth, setIsAuth] = useState(true)

  const boxes = {
    registration: <Registration/>,
    login: <Login/>
  }



  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/room' element={<Room/>}/>
      </Routes>
     
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
