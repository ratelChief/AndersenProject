import { FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR } from '../actions/locationActions';
const initialState = {
  locations: []
}
export const fetchLocationsReducer = (state = initialState, action) => {
  if (action.type === FETCH_LOCATIONS) {
    state = {
      ...state,
      locations: action.payload.response.locations
    };
  }
  return state;
};
//
// export const fetchLocation = (state = initialState, action => {
//   switch (action.type) {
//     case FETCH_LOCATIONS_SUCCESS:
//     state = {
//       ...state,
//       locations: action.payload.response.locations
//     };
//     break;
//     case FETCH_LOCATIONS_ERROR:
//     state = {
//       ...state,
//       locations: ''
//     }
//     default: return state;
//
//   }
//   return state;
// });
