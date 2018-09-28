import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store/configureStore';
import * as constants from './constants/location.constants';

if (!localStorage.getItem(constants.RECENT_SEARCHES)) {
  localStorage.recentSearches = JSON.stringify([]);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
