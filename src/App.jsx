import { useState } from 'react'
import './App.css'
import Hello from './Hello.jsx'
import Counter from './counter/Counter.jsx';
import Register from './login/Register.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
              <Register />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
