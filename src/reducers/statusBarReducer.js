export const statusBarReducer = (state = { status: 'Recent searches' }, action) => {
  if (action.type === 'SWITCH_STATUS') {
    state = {
      ...state,
      status: action.payload
    };
  }
  return state;
};
