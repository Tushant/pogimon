import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  products: state.products
});

class ProductView extends React.Component {
  render() {
    const { products, location } = this.props;
    if (!products.products.length || !location) {
        return (<div>Loading...</div>);
    }
    const product = products.products.find(p => p.id === location.query.id);
    // const { product } = this.props.location.state.product;
    return product ? (
      <div>Product {product.name}</div>
    ) : ( <div>Sorry Product does not exist</div> );
  }
}

export default connect(mapStateToProps)(ProductView);
