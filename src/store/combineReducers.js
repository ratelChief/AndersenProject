import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';
import { realtyReducer } from '../reducers/realtyReducer';
import { propertyReducer } from '../reducers/PropertyReducer';
import { favoritesReducer } from '../reducers/favoritesReducer';
import { todoListReducer } from '../reducers/todoReducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
  realty: realtyReducer,
  property: propertyReducer,
  favorites: favoritesReducer,
  todos: todoListReducer
});

export default rootReducer;
