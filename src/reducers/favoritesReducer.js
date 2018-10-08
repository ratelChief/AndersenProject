import * as types from '../constants/favorites.constants.js';

const initialState = {
  data: JSON.parse(localStorage.getItem(types.FAVORITES))
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_TO_FAVORITES: {

    const stringifyData = JSON.stringify([
      ...state.data,
      action.payload
    ]);

    localStorage.setItem(types.FAVORITES, stringifyData);

    return {
      ...state,
      data: [
        ...state.data,
        action.payload
      ]
    };
  }

  case types.SET_TO_INITIAL_STATE:
    return {
      data: JSON.parse(localStorage.getItem(types.FAVORITES))
    };

  default: return state;
  }
};
