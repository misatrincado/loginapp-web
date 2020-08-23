import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga'
import { session } from './reducers/session'
import { users } from './reducers/users'
import rootSaga from './sagas';

const reducers = combineReducers({
  session,
  users
});

const sagaMiddleware = reduxSaga();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return {
    ...createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}