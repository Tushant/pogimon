export function showOnline(checked) {
  console.log('checked', checked);
  return {
    type: 'SHOW_ONLINE',
    checked
  }
}

export function priceRange(price1, price2) {
  console.log('price range', price1, price2);
  return {
    type: 'FILTER_PRICE',
    price1,
    price2
  }
}

export function deliveryTime(time) {
  console.log('time', time.target.value);
  return {
    type: 'FILTER_TIME',
    time
  }
}
