 const reducer = (state = {
  likesCount: 0
}, action) => {
  switch (action.type) {
    case 'SHOW_LIKE':
    state = {
      ...state,
      likesCount: state.likesCount
    };
    break;
    case 'ADD_LIKE':
    state = {
      ...state,
      likesCount: state.likesCount + action.payload
    };
    break;
    case 'REMOVE_LIKE':
    state = {
      ...state,
      likesCount: state.likesCount - action.payload
    };
    break;
    default: return state;
  }
  return state;
};

export default reducer;
