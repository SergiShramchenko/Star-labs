import React from 'react';

import './checkOutItem.scss';

export default ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>$#1005</div>
  </div>
);
