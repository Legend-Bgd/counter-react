import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(32);

  const setCounterWithValue = value => () => {
    setCounter(counter + value)
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={setCounterWithValue(-1)}>-1</button>
        <button onClick={setCounterWithValue(-counter)}>Reset</button>
        <button onClick={setCounterWithValue(+1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
