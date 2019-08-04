import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import login from './reducers/loginReducer';
import league from './reducers/leagueReducer';
import films from './reducers/filmReducer';

import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({ login, league, films });
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export * from './reducers/loginReducer';
export * from './reducers/leagueReducer';
export * from './reducers/filmReducer';

export default store;
