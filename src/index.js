import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import reducers from './reducers';
import Root from './components/root';

const middlewares = [];
middlewares.push(routerMiddleware(browserHistory));

const configureStore = (initialState) => {
  const store = createStore(
      reducers,
      initialState,
  );
  // Creating your Redux store

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducer);
    });
    // Enable HMR for reducers.
  }

  return store;
};

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history} />
  , document.querySelector('#app'));

if (module.hot) {
  module.hot.accept('./components/root', () => {
    ReactDOM.render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
      , document.querySelector('#app'));
  });
}
