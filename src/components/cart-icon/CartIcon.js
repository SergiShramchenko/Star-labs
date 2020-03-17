import React from 'react';
import { connect } from 'react-redux';

import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingBagIcon } from '../../assets/cart.svg';

import './cartIcon.scss';

const CartIcon = ({ toggleCardHidden }) => (
  <div className='cart-icon' onClick={toggleCardHidden}>
    <ShoppingBagIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
