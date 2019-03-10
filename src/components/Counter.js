import React from 'react';

const Counter = ({ title, count, increment }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <h2>Count: {count}</h2>
    <button style={{ width: 90, height: 40 }} onClick={increment}>
      increment
    </button>
  </React.Fragment>
);

export default Counter;
