import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';
import { statusBarReducer } from '../reducers/statusBarReducer';

const rootReducer = combineReducers({
  locationsReducer,
  statusBarReducer
});

export default rootReducer;
