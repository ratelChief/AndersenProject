import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AwesomeComponent from './components/AwesomeComponent.js';
import { createStore } from 'redux';

const initialState = {
  likesCount: 0
};

function likesCount(state = initialState, action) {
  if (action.type === 'SHOW_LIKE') {
    return {
      ...state,
      likesCount: state.likesCount
    };
  }
  if (action.type === 'ADD_LIKE') {
    return {
      ...state,
      likesCount: state.likesCount++
    };
  }
  return state;
}

const store = createStore(likesCount, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //хранилище всех данных в нашем приложении и любые данные храним в сторе

ReactDOM.render(
  <Provider store={store}>
    <AwesomeComponent />
  </Provider>,
  document.getElementById('app')
);
