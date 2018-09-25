import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './combineReducers';


export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));
 //хранилище всех данных в нашем приложении и любые данные храним в сторе //// принимает редюсер и первоначальное состояние
