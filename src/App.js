import React, { useState } from 'react';
import './CounterApp.css'; // Import the CSS file

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-app">
      <h2>Counter App</h2>
      <p className="counter">Count: {count}</p>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterApp;
