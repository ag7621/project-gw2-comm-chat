import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>GW2 Comm Buddy :D</h1>
      <div>
        <ul>
          <h2>Wing 1</h2>
          <li>Test 1</li>
        </ul>
      </div>
      <form>
        <label>Input</label>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
