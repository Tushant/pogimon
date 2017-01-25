import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/index';
import SidebarFilter from '../SidebarFilter/index';
import ProductGrid from '../ProductGrid/index';
import Banner from '../../components/Banner/index';
import './app.css';

class FiverrClone extends React.Component {
  render() {
    return (
      <div className="main-block">
        <Banner />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <SidebarFilter />
            </div>
            <div className="col-sm-12 col-md-10">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default FiverrClone;
