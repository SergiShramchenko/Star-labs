import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import './cartDropDown.scss';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    {console.log(cartItems)}
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropDown);
