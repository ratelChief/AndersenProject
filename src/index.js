import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Locations from './containers/Locations';
import RealtyList from './containers/RealtyList';
import PropertyDetails from './containers/propertyDetails';
import Favorites from './containers/Favorites';

import store from './store/configureStore';
import { RECENT_SEARCHES } from './constants/location.constants';
import { FAVORITES } from './constants/favorites.constants';

if (!localStorage.getItem(RECENT_SEARCHES)) {
  localStorage.recentSearches = JSON.stringify([]);
}

if (!localStorage.getItem(FAVORITES)) {
  localStorage[FAVORITES] = JSON.stringify([]);
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Locations} />
        <Route exact path='/realty/:item' component={RealtyList} />
        <Route path='/realty/:item/:name' component={PropertyDetails} />
        <Route exact path='/:fav' component={Favorites} />
        <Route path='/:fav/:name' component={PropertyDetails} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
