import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';
import { realtyReducer } from '../reducers/realtyReducer';
import { propertyReducer } from '../reducers/PropertyReducer';
import { favoritesReducer } from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
  realty: realtyReducer,
  property: propertyReducer,
  favorites: favoritesReducer
});

export default rootReducer;
