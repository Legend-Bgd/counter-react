import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(32);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
