import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Locations from './containers/Locations';
import SearchResults from './containers/SearchResults';

import store from './store/configureStore';
import * as constants from './constants/location.constants';

if (!localStorage.getItem(constants.RECENT_SEARCHES)) {
  localStorage.recentSearches = JSON.stringify([]);
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Locations} />
          <Route path='/SearchResults' component={SearchResults} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
