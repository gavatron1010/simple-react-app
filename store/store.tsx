import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run,
  }
}
