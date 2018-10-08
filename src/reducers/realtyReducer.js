import { FETCH_REALTY_LIST, FETCH_REALTY_LIST_SUCCESS } from '../constants/realty.constants';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  searchResults: [],
  totalResults: 0
};

export const realtyReducer = (state = initialState, action) => {
  switch (action.type) {

  case FETCH_REALTY_LIST:
    return {
      ...state,
      fetching: true
    };

  case FETCH_REALTY_LIST_SUCCESS:
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
