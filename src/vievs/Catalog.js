import React, {useState} from 'react';
import backetIcon from '../foto/backet.png'
import ModalBox from '../components/ModalBox';
import Backet from '../components/Backet';
import './Catalog.css';

import { connect } from "react-redux"
import setIsOpenModalBoxAction from '../store/actions/isOpenModalBoxAction'

function Catalog({products, setIsOpenModalBoxFunction}) {

    const[count, setCount] = useState(0)



    let info = {
        'product1': 'Товар 1',
        'product1': 'Товар 2',
        'product1': 'Товар 3'
      }

    function addProduct(e){
        let id = e.target.id
        products.push(id)
        setCount(count +1)
    }

  return (
    <div className="Catalog">
        <div className='Catalog__panel'>
            <div onClick={() => setIsOpenModalBoxFunction('backet')} className='Catalog__basket'>
                <img src={backetIcon}/>
                {
                count > 0
                ?
                <span>{count}</span>
                :
                null
                }
            </div>
        </div>
        <div className='Catalog_products'>
            <div className='Catalog__card'>
                <h2>Товар1</h2>
                <button id='product1' onClick={addProduct}>В корзину</button>
            </div>
            <div className='Catalog__card'>
                <h2>Товар2</h2>
                <button id='product2' onClick={addProduct}>В корзину</button>
            </div>
            <div className='Catalog__card'>
                <h2>Товар3</h2>
                <button id='product3' onClick={addProduct}>В корзину</button>
            </div>
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

export default connect(null, mapDispatchToProps)(Catalog);