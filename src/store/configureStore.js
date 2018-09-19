import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';


export default createStore(
  reducer,
  { likesCount: 0 },
  composeWithDevTools(applyMiddleware(thunk)));
 //хранилище всех данных в нашем приложении и любые данные храним в сторе //// принимает редюсер и первоначальное состояние
