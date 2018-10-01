import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';
import { realtyReducer } from '../reducers/realtyReducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
  realty: realtyReducer
});

export default rootReducer;
