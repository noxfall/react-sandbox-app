import Button from './components/Button';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  };

  const resetCount = () => {
    return setCount(0);
  }

  return (
    <div className="container main">
      <Header />
      <div className="container actions">
        <span className="counter">{count}</span>
        <Button title="+" handleClick={incrementCount} />
        <Button title="reset" handleClick={resetCount} />
      </div>
    </div>
  );
};

export default App;