import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './vievs/Main';
import Catalog from './vievs/Catalog';
import Room from './vievs/Room';
import ModalBox from './components/ModalBox';
import Registration from './components/Registration';
import Login from './components/Login';
import Backet from './components/Backet';
import './App.css';

import { connect } from "react-redux"

function App({isOpenModalBox}) {

  const[isAuth, setIsAuth] = useState(true)
  const[products, setProducts] = useState([])

  const boxes = {
    registration: <Registration/>,
    login: <Login/>,
    backet: <Backet products={products}/>
  }

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/catalog' element={<Catalog products={products} />}/>
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
