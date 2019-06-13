import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import login from './reducers/loginReducer/index';
import thunkMiddleware from 'redux-thunk';


//const reducer = combineReducers({ login });
const reducer = login
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

//export * from 'reducers/loginReducer';

export default store;
