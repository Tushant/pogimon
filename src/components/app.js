import React from 'react';
import Navbar from './Navbar/index';

function App(props) {
  return (
    <div className="main-wrapper">
      <Navbar />
      {props.children}
    </div>
  );
}

export default App;
