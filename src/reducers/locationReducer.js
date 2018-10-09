import { FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR, RECENT_SEARCHES, FETCH_MY_LOCATION_SUCCESS, SET_TO_INITIAL_STATE } from '../constants/location.constants';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  locations: [],
  title: 'Recent searches:',
  searchedValue: '',
  recentSearches: JSON.parse(localStorage.getItem(RECENT_SEARCHES)) || []
};

export const locationsReducer = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {

  case FETCH_LOCATIONS:
    return {
      ...state,
      fetching: true
    };

  case FETCH_LOCATIONS_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      locations: payload.response.locations,
      searchResults: payload.response.listings,
      title: 'Please select a location below:',
      searchedValue: payload.request.location
    };

  case FETCH_LOCATIONS_ERROR:
    return {
      ...state,
      fetching: false,
      error: payload,
      title: 'There was a problem with your search'
    };

  case FETCH_MY_LOCATION_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      locations: payload.response.locations,
      title: 'Please select a location below:'
    };

  case SET_TO_INITIAL_STATE:
    return {
      ...state,
      fetching: false,
      fetched: false,
      error: null,
      locations: [],
      title: 'Recent searches:',
      searchedValue: '',
      recentSearches: JSON.parse(localStorage.getItem(RECENT_SEARCHES)) || []
    };

  default: return state;
  }
};
