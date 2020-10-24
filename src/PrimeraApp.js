import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';

const PrimeraApp = ( { saludo } ) => {

  return(
    <div>
      <h1> { saludo } </h1>
      <p>Esta es una app</p>
    </div>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
