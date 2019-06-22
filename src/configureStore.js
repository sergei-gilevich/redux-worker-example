import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import createWorkerMiddleware from './createWorkerMiddleware';
import counter from './reducer';

const reducers = combineReducers({ counter });

const worker = new Worker('./worker.js', { type: 'module' });
console.log(worker);

const workerMiddleware = createWorkerMiddleware(worker);

const logger = createLogger({
  // ...options
});

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  reducers,
  applyMiddleware(workerMiddleware, sagaMiddleware, logger)
);