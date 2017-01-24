import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { fetchProduct } from './actions';
import './product-grid.css';

const mapStateToProps = (state) => ({
    products: state.products
});

function renderProduct(products) {
  console.log('renderProduct', products);
  const product = _.map(products, (product) =>
            <Col xs={12} md={4} key={product.id} className="products">
              <div className="product">
                <Link to={{pathname: `product/${product.name}`, query: { id: product.id }}}>
                  <img src={product.image} className="img-responsive" />
                </Link>
                <span className="pull-left product-name">{product.name}</span>
                <span className="pull-right price">${product.price}</span>
              </div>
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
