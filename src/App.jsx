import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion, useScroll } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div>
        <h1>Zelong</h1>
      </div>

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

      <div>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
      
      </div>

      <Component />
    </>
  );
}

function Component() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="scroll-progress" />
  );
}

export default App;
