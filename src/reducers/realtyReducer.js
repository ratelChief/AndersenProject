import * as constants from '../constants/location.constants';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  searchResults: [],
  totalResults: 0
};

export const realtyReducer = (state = initialState, action) => {
  switch (action.type) {
  case constants.FETCH_LOCATIONS_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      searchResults: action.payload.response.listings,
      totalResults: action.payload.response.total_results
    };
  default: return state;
  }
};
