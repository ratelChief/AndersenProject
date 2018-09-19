import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/index';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //хранилище всех данных в нашем приложении и любые данные храним в сторе //// принимает редюсер и первоначальное состояние
