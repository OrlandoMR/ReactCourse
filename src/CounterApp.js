import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  const [counter, setCounter] =useState(0);

  const handleClick = () => {
    setCounter(counter+1)
  }

  return(
    <div>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button type="button" onClick={ handleClick }>+1</button>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,

}

export default CounterApp;
