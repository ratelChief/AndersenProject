import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { likeReducer } from '../reducers/likeReducer';
import { locationReducer } from '../reducers/locationReducer';


export default createStore(
  combineReducers({ likeReducer, locationReducer }),
  composeWithDevTools(applyMiddleware(thunk)));
 //хранилище всех данных в нашем приложении и любые данные храним в сторе //// принимает редюсер и первоначальное состояние
