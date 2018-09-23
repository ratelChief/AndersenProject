import { SWITCH_STATUS_ON_SUCCESS, SWITCH_STATUS_ON_ERROR, SWITCH_STATUS_DEFAULT } from '../actions/statusBarActions';

const initialState = {
  status: 'Recent searches'
};

export const statusBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_STATUS_DEFAULT:
     state = {
      ...state,
      status: action.payload
    };
    break;
    case SWITCH_STATUS_ON_SUCCESS:
    state = {
      ...state,
      status: action.payload
    };
    break;
    case SWITCH_STATUS_ON_ERROR:
    state = {
      ...state,
      status: action.payload
    };
    break;
    default: return state;
  }
  return state;
};
