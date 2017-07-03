import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {hotcoldReducer} from './reducers';

export default createStore(hotcoldReducer, applyMiddleware(logger(),thunk));

