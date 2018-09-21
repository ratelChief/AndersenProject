const initialState = {
  status: 'Recent searches'
};

export const locationReducer = (state = initialState, action) => {
  if (action.type === 'SWITCH_STATUS') {
    state = {
      ...state,
      status: action.payload
    };
  }
  return state;
};
