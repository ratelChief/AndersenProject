import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import AwesomeComponent from './components/AwesomeComponent';
import { createStore } from 'redux';

const initialState = {
  likesCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LIKE':
    state = {
      ...state,
      likesCount: state.likesCount
    };
    break;
    case 'ADD_LIKE':
    state = {
      ...state,
      likesCount: state.likesCount + action.payload
    };
    break;
    case 'REMOVE_LIKE':
    state = {
      ...state,
      likesCount: state.likesCount - action.payload
    };
    break;
    default: return state;
  }
  return state;
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //хранилище всех данных в нашем приложении и любые данные храним в сторе //// принимает редюсер и первоначальное состояние

store.subscribe(() => {
  console.log('Store updated', store.getState());
});

render(
  <Provider store={store}>
    <AwesomeComponent />
  </Provider>,
  document.getElementById('app')
);
