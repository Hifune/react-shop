import React from 'react';
import './ModalBox.css';

import { connect } from "react-redux"
import setIsOpenModalBoxAction from '../store/actions/isOpenModalBoxAction'

function ModalBox({setIsOpenModalBoxFunction, children}) {
    function closeModalBox(){
        setIsOpenModalBoxFunction('none')
      }
  return (
    <>
    <div className='echo' onClick={closeModalBox}></div>
    <div className='ModalBox'>
      { children }
    </div>
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

export default connect(null, mapDispatchToProps) (ModalBox);