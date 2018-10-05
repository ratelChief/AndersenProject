import { SET_TO_FAVORITES, FAVORITES } from '../constants/favorites.constants.js';

const initialState = {
  favorites: JSON.parse(localStorage.getItem(FAVORITES))
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TO_FAVORITES:
    return {
      ...state,
      favorites: [
        ...state.favorites,
        action.payload
      ]
    };
  default: return state;

  }
};