import productsList from './data/product-data';

let products = productsList();
const initialState = {
  fetching: false,
  fetched: true,
  products: productsList()
}

function productFilterFromStatus({checked}) {
  return checked ? products.filter(product => product.status === 'online') : products;
}

function productFilterFromTime({time}) {
  if (time !== 'any') {
    return products.filter(product => product.deliveryTime === time);
  } else
  return products;
}

function productFilterFromPrice({price1, price2}) {
  return products.filter(product => product.price > price1 && product.price < price2);
}

export default function getProduct(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_FETCH_START':
      return {...state, fetching: true };
    case 'PRODUCT_FETCH_SUCCESS':
      return { ...state, fetching: false, fetched: true, products: products};
    case 'FILTER_PRICE':
      return { ...state, fetched: true, fetching: false, products: productFilterFromPrice(action)};
    case 'SHOW_ONLINE':
      return { ...state, fetched: true, fetching: false, products: productFilterFromStatus(action)};
    case 'FILTER_TIME':
      return { ...state, fetched: true, fetching: false, products: productFilterFromTime(action)};
    default:
      return state;
  }
}
