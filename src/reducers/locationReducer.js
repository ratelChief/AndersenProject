import * as constants from '../constants/location.constants';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  locations: [],
  title: 'Recent searches:',
  searchedValue: '',
  searchResults: [],
  recentSearches: JSON.parse(localStorage.getItem(constants.RECENT_SEARCHES)) || []
};

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {

  case constants.FETCH_LOCATIONS:
    return {
      ...state,
      fetching: true
    };


  case constants.FETCH_LOCATIONS_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      locations: action.payload.response.locations,
      searchResults: action.payload.response.listings,
      title: 'Please select a location below:',
      searchedValue: action.payload.request.location
    };

  case constants.FETCH_LOCATIONS_ERROR:
    return {
      ...state,
      fetching: false,
      error: action.payload,
      title: 'There was a problem with your search'
    };

  case constants.FETCH_MY_LOCATION_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      locations: action.payload.response.locations,
      title: 'Please select a location below:'
    };

  default: return state;
  }
};
