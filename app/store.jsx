import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import Immutable from 'immutable'

const initialState = Immutable.Map();

export default createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, createLogger()))
