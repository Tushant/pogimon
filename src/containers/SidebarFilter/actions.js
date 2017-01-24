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
  return {
    type: 'FILTER_TIME',
    time
  }
}

export function sellerLevel(level) {
  return {
    type: 'SELLER_LEVEL',
    level
  }
}
