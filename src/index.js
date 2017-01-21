import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

const middlewares = [];
middlewares.push(routerMiddleware(browserHistory));

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} routes={routes} history={history} />
  </Provider>
  , document.querySelector('#app'));
