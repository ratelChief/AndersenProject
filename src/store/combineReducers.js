import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';

const rootReducer = combineReducers({
  locationsReducer
});

export default rootReducer;
