import { SET_TO_FAVORITES, FAVORITES, SET_TO_INITIAL_STATE } from '../constants/favorites.constants.js';

import { saveToLocalStorage, getFromLocalStorage } from '../utils.js';

const initialState = {
  data: getFromLocalStorage(FAVORITES)
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TO_FAVORITES: {

    saveToLocalStorage(FAVORITES, state.data, action.payload);

    return {
      ...state,
      data: [
        ...state.data,
        action.payload
      ]
    };
  }

  case SET_TO_INITIAL_STATE:
    return {
      data: getFromLocalStorage(FAVORITES)
    };

  default: return state;

  }
};
