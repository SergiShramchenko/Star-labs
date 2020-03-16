import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './cartDropDown.scss';

export default () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
