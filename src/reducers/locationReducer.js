import * as consts from '../consts/consts';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  locations: [],
  title: 'Recent searches:'
};

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {

  case consts.FETCH_LOCATIONS:
    state = {
      ...state,
      fetching: true
    };
    break;

  case consts.FETCH_LOCATIONS_SUCCESS:
    state = {
      ...state,
      fetching: false,
      fetched: true,
      locations: action.payload.response.locations,
      title: 'Please select a location below:'
    };
    break;

  case consts.FETCH_LOCATIONS_ERROR:
    state = {
      ...state,
      fetching: false,
      error: action.payload,
      title: 'There was a problem with your search'
    };
    break;

  case consts.FETCH_MY_LOCATION_SUCCESS:
    state = {
      ...state,
      fetching: false,
      fetched: true,
      locations: action.payload.response.locations,
      title: 'Please select a location below:'
    };
    break;

  default: return state;
  }
  return state;
};
