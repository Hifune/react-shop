import React, {useEffect} from 'react';
import './Backet.css';

function Backet({products}) {

useEffect(()=> {

    let basket = document.getElementById('basket')

    products.forEach(element => {
            let p = document.createElement('p')
            p.textContent = element
            basket.appendChild(p)
    });

}, [products])
   
  return (
        <div id='basket' className='Basket' >

        </div> 
  )
}

export default Backet;