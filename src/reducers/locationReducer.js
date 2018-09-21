export const locationReducer = (state = {}, action) => {
   if (action.type === 'FETCH_SUCCESS') {
     state = {
       ...state,
       data: action.payload
     };
   }
  return state;
};
