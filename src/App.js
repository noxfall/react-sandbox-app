import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container main">
      <Header />
      <div className="container actions">
        <span className="counter">{count}</span>
        <Button title="+" handleClick={incrementCount} />
        <Button title="Reset" handleClick={resetCount} />
      </div>
    </div>
  );
}

export default App;
