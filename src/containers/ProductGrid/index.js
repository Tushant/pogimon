import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { fetchProduct } from './actions';

const mapStateToProps = (state) => ({
    products: state.products
});

function renderProduct(products) {
  console.log('renderProduct', products);
  const product = _.map(products, (product) =>
            <Col xs={12} md={4} key={product.id}>
              <Image src={product.image} responsive />
              {product.name}
            </Col>
          );
  return product;
}

class ProductGrid extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProduct());
  }

  render() {
    const { products } = this.props;
    return (
      <div>
          <Row>
            {renderProduct(products.products)}
          </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductGrid);
