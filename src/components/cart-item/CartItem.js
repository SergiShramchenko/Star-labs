import React from 'react';

import './cartItem.scss';

export default ({ item: { imageUrl, price, name, quantity } }) => (
  <div classNam='cart-item'>
    <img src={imageUrl} alt='item' />
    <span className='name'>{name}</span>
    <span className='price'>
      {quantity} x {price}
    </span>
  </div>
);
