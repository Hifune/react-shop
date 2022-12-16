import React, {useState} from 'react';
import backetIcon from '../foto/backet.png'
import ModalBox from '../components/ModalBox';
import './Catalog.css';

function Catalog() {

    const[count, setCount] = useState(0)
    const[products, setProducts] = useState([])
    const[backet, setBacket] = useState(false)

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
            <div onClick={() => setBacket(true)} className='Catalog__basket'>
                <img src={backetIcon}/>
                <span>{count}</span>
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
        {
        backet
        ?
        <ModalBox>
            {
                () => products.map((item) => `${item}`)
            }
        </ModalBox>
        :
        null
        }
    </div>

  );
}

export default Catalog;