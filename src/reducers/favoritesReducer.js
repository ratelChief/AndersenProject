import { SET_TO_FAVORITES } from '../constants/favorites.constants.js';

const initialState = {
  favorites: []
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TO_FAVORITES:
    return {
      ...state,
      favorites: action.payload.data
    };
  default: return state;

  }
};
