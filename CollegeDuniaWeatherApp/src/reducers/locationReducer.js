import {Types} from '../actions/types';

const INITIAL_STATE = {
  currentPosition: {},
};

export const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CURRENT_POSITION:
      return {
        ...state,
        currentPosition: action.payload,
      };
      break;
    case Types.LOGOUT:
      return {
        ...state,
        currentPosition: {},
      };
    default:
      return state;
  }
};
