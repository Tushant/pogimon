import React from 'react';
import { Link } from 'react-router';

class FiverrClone extends React.Component {
  render() {
    return (
      <div>
        Main Pages
        <Link to='/product'>View Product Here</Link>
      </div>
    );
  }
}

export default FiverrClone;
