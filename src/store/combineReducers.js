import { combineReducers } from 'redux';
import { locationReducer, fetchLocations } from '../reducers/locationReducer';
import { statusBarReducer } from '../reducers/statusBarReducer';

const rootReducer = combineReducers({
  locationReducer,
  fetchLocations,
  statusBarReducer
});

export default rootReducer;
