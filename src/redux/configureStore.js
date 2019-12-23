import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  return createStore(rootReducers, composeEnhancers(...enhancers));
};

export default configureStore;
