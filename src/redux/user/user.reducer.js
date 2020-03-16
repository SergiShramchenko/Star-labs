import { UserActionsTypes } from './user.types';

const initialState = {
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
