import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import './banner.css';

function Banner() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="banner">
            <Jumbotron className="center-banner">
              <h2>Health, Nutrition & Fitness</h2>
              <p>Promote your well-being with fitness and nutritional advice from health experts</p>
              <Button>How Fiverr Works</Button>
            </Jumbotron>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
