import { SET_TO_FAVORITES } from '../constants/favorites.constants.js';

export const setToFavorites = data => ({
  type: SET_TO_FAVORITES,
  payload: data
});
