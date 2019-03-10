import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import Counter from './Counter';

const INCREMENT = 'INCREMENT';

const increment = () => ({ type: INCREMENT });

const reducer = (state = { count: 0 }, { type }) => {
  switch (type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReduxCounterContainer = connect(
  state => state,
  { increment }
)(Counter);

const WrappedReduxCounter = () => (
  <Provider store={store}>
    <ReduxCounterContainer title="Redux Counter" />
  </Provider>
);

export default WrappedReduxCounter;
