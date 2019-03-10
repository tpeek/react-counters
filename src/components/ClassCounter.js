import React, { Component } from 'react';

import Counter from './Counter';

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    return <Counter title="Class Counter" count={this.state.count} increment={this.increment} />;
  }
}

export default ClassCounter;
