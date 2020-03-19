import { UserActionsTypes } from './user.types';

const initialState = {
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UserActionsTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionsTypes.SIGN_IN_FAILURE:
    case UserActionsTypes.SIGN_OUT_FAILURE:
    case UserActionsTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
