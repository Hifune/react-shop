import React, {useEffect} from 'react';
import Product from './Product'
import './Backet.css';

function Backet({products}) {

const items = []
for (let elem of products){
  items.push(<Product product={elem} />)
}

// useEffect(()=> {

//     let basket = document.getElementById('basket')

//     products.forEach(element => {
//             let p = document.createElement('p')
//             p.textContent = element
//             basket.appendChild(p)
//     });

// }, [products])
   
  return (
        <div id='backet' className='Backet' >
            {items}

        </div> 
  );
}

export default Backet;