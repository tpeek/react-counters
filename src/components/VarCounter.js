import React, { Component } from 'react';

import Counter from './Counter';

let count = 0;

class VarCounter extends Component {
  render() {
    return (
      <Counter
        title="Var Counter"
        count={count}
        increment={() => {
          count++;
          this.forceUpdate();
        }}
      />
    );
  }
}

export default VarCounter;
