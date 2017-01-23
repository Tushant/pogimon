import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productData from './data/product-data';
import products from './containers/ProductGrid/reducers';

const reducers = combineReducers({
  routing: routerReducer,
  productData,
  products,
});

export default reducers;
