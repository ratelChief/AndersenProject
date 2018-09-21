const initialState = {
  status: 'Recent searches'
};

export const statusBarReducer = (state = initialState, action) => {
  if (action.type === 'SWITCH_STATUS') {
    state = {
      ...state,
      status: action.payload
    };
  }
  return state;
};
