import React from 'react';
import { Link } from 'react-router';

class Fiverr extends React.Component {
  render() {
    return (
      <div>
        Main Pages
        <Link to='/product'>View Product</Link>
      </div>
    );
  }
}

export default Fiverr;
