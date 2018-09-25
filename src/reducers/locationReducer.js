import { FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR } from '../actions/locationActions';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  locations: [],
  title: 'Recent searches:'
};

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_LOCATIONS:
    state = {
      ...state,
      fetching: true
    };
    break;

    case FETCH_LOCATIONS_SUCCESS:
    state = {
      ...state,
      fetching: false,
      fetched: true,
      locations: action.payload.response.locations,
      title: 'Please select a location below:'
    };
    break;

    case FETCH_LOCATIONS_ERROR:
    state = {
      ...state,
      fetching: false,
      error: action.payload,
      title: 'There was a problem with your search'
    };
    break;

    default: return state;
  }
  return state;
};
