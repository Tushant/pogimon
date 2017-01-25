import React from 'react';
import { connect } from 'react-redux';
import './product.css';

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
    const userInfo = product.user.map(user => user);
    console.log('user', userInfo[0].name);
    return product ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card">
              <div className="card-action">
                <h3>{product.name}</h3>
              </div>
              <div className="card-image">
                <img className="img-responsive" src={product.image} />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 user-card">
            <div className="card">
              <div className="card-profile-image center">
                <img className="img-responsive img-circle" src="http://placehold.it/100x100" />
                <h4 className="text-center">{userInfo[0].name}</h4>
              </div>
              <div className="card-list">
                <ul className="list-unstyled">
                  <li>From: {userInfo[0].from}</li>
                  <li>Speaks: {userInfo[0].speaks}</li>
                  <li>Positive Rating: {userInfo[0].positiveRating}</li>
                  <li>Response Time: {userInfo[0].ResponseTime}</li>
                </ul>
              </div>
              <div className="card-content">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6" style={{ marginTop: '2em' }}>
            <div className="card">
              <div className="card-action">
                <h3>About this gig</h3>
              </div>
              <div className="card-content">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : ( <div>Sorry Product does not exist</div> );
  }
}

export default connect(mapStateToProps)(ProductView);
