import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import counter from './reducer';

const reducers = combineReducers({ counter });

const logger = createLogger({
  // ...options
});

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
);