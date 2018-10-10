import { SET_TO_FAVORITES, SET_TO_INITIAL_STATE } from '../constants/favorites.constants.js';

export const setToFavorites = data => ({
  type: SET_TO_FAVORITES,
  payload: data
});

export const setToInitialState = () => ({
  type: SET_TO_INITIAL_STATE
});
