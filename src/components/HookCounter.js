import React, { useState } from 'react';

import Counter from './Counter';

const HookCounter = () => {
  const [count, setCount] = useState(0);
  return <Counter title="Hook Counter" count={count} increment={() => setCount(count + 1)} />;
};

export default HookCounter;
