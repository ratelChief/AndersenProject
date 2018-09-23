import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';

const rootReducer = combineReducers({
  locations: locationsReducer
});

export default rootReducer;
