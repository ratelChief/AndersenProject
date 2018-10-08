import { FETCH_REALTY_LIST, FETCH_REALTY_LIST_SUCCESS, ADDED_TO_FAVES } from '../constants/realty.constants';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  searchResults: [],
  totalResults: 0,
  isAddedToFaves: false
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

  case ADDED_TO_FAVES: {
    return {
      ...state,
      isAddedToFaves: action.payload
    };
  }
  default: return state;
  }
};
