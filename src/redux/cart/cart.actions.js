import { CartActionTypes } from './cart.types';

export const toggleCardHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.DECREASE_ONE_POSITION_FROM_CART_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
