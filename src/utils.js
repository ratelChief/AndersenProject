import { FAVORITES } from './constants/favorites.constants.js';

export function saveToLocalStorage(state, payload) {
  const stringifyData = JSON.stringify([
    ...state,
    payload
  ]);

  localStorage.setItem(FAVORITES, stringifyData);
}
