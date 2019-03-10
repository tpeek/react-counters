import React from 'react';

import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import VarCounter from './components/VarCounter';
import ReduxCounter from './components/ReduxCounter';
import './App.css';

export default () => (
  <div className="App">
    <ClassCounter />
    <hr />
    <HookCounter />
    <hr />
    <VarCounter />
    <hr />
    <ReduxCounter />
    <hr />
  </div>
);
