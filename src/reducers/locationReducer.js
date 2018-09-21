import { FETCH_LOCATIONS } from '../actions/locationActions';

export const locationReducer = (state = {}, action) => {
   if (action.type === 'FETCH_SUCCESS') {
     state = {
       ...state,
       data: action.payload
     };
   }
  return state;
};

export const fetchLocations = (state = [], action) => {
  if (action.type === FETCH_LOCATIONS) {
    state = [
      ...state,
      ...action.payload
    ];
  }
  return state;
};
