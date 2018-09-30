import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import SearchResults from './components/SearchResults.jsx';
import Main from './components/Main.jsx';

import store from './store/configureStore';
import * as constants from './constants/location.constants';

if (!localStorage.getItem(constants.RECENT_SEARCHES)) {
  localStorage.recentSearches = JSON.stringify([]);
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/SearchResults' component={SearchResults} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
