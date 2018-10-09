import { SET_TO_FAVORITES, FAVORITES, SET_TO_INITIAL_STATE } from '../constants/favorites.constants.js';

const initialState = {
  data: JSON.parse(localStorage.getItem(FAVORITES))
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TO_FAVORITES: {

    const stringifyData = JSON.stringify([
      ...state.data,
      action.payload
    ]);

    localStorage.setItem(FAVORITES, stringifyData);

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
      data: JSON.parse(localStorage.getItem(FAVORITES))
    };

  default: return state;

  }
};
