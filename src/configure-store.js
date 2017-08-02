import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import DevTools from './dev-tools';
import reducers from './reducers';
import callApi from './utils/apiCaller';

const middleware = routerMiddleware(browserHistory);

const enhancers = [
  applyMiddleware(thunk.withExtraArgument(callApi), middleware),
  DevTools.instrument(),
];

const configureStore = () => {
  return createStore(
    reducers,
    compose(...enhancers)
  );
};

export default configureStore;
