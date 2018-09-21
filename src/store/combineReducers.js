import { combineReducers } from 'redux';
import { fetchLocationsReducer } from '../reducers/locationReducer';
import { statusBarReducer } from '../reducers/statusBarReducer';

const rootReducer = combineReducers({
  fetchLocationsReducer,
  statusBarReducer
});

export default rootReducer;
