import React from 'react';
import './Product.css';

function Product({product}) {
  return (
    <div className="Product">
      <img/>
      <p>{product}</p>
    </div>
  );
}

export default Product;