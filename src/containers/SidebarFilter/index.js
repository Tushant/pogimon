import React from 'react';
import { connect } from 'react-redux';
import { showOnline, deliveryTime, priceRange, sellerLevel } from './actions';
import './sidebarFilter.css';

const mapDispatchToProps = (dispatch) => ({
  showOnline: (checked) => dispatch(showOnline(checked)),
  deliveryTime: (time) => dispatch(deliveryTime(time)),
  priceRange: (price1, price2) => dispatch(priceRange(price1, price2)),
  sellerLevel: (level) => dispatch(sellerLevel(level)),
});

class SidebarFilter extends React.Component {
  handleSellerLevel(e) {
    let levels = [].filter.call(document.getElementsByName('seller[]'), (target) => target.checked).
      map(c => c.value);
    this.props.sellerLevel(levels);
  }
  render() {
    return (
      <div className="sidebar-filter">
        <h3>Refine Results</h3>
        <ul className="list-unstyled">
          <h2>Delivery time</h2>
          <li onClick={(e) => this.props.deliveryTime(e.target.value)}>
            <p><input type="radio" name="deliveryTime" value="24 hours"/> Upto 24 hours</p>
            <p><input type="radio" name="deliveryTime" value="3 days" /> Upto 3 days</p>
            <p><input type="radio" name="deliveryTime" value=" 7 days" /> Upto 7 days</p>
            <p><input type="radio" name="deliveryTime" value="any" /> Any</p>
        </li>
        </ul>
        <hr />
        <h2>Price Range</h2>
        <form onSubmit={(e) => {e.preventDefault(); this.props.priceRange(e.target.price1.value, e.target.price2.value)}}>
          $<input type="text" className="form-control" name="price1" />
          to $<input type="text" className="form-control" name="price2"/>
          <button type="submit">
            <span className="glyphicon glyphicon-menu-right" />
          </button>
        </form>
        <h2>Online Status</h2>
        <span>
          <input type="checkbox" onClick={(e) => this.props.showOnline(e.target.checked)}/>
          show online sellers
        </span>
        <ul className="list-unstyled">
          <h2>Seller Lever</h2>
          <li onClick={(e) => this.handleSellerLevel(e)}>
            <p><input type="checkbox" name="seller[]" value="new" />New Seller</p>
            <p><input type="checkbox" name="seller[]" value="1" />Level 1</p>
            <p><input type="checkbox" name="seller[]" value="2" />Level 2</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SidebarFilter);
