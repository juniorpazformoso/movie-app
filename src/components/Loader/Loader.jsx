import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div className="loader-container">
      <Spinner animation="grow" />
    </div>
  );
}

export default Loader;
