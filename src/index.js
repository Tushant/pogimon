import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import reducers from './reducers';
import routes from './routes';
import Root from './components/root';

const middlewares = [];
middlewares.push(routerMiddleware(browserHistory));

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>
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
