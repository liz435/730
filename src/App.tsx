import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number | null>(null);


  const handleButtonClick = (index: number) => {
    setClickedButtonIndex(index);
  };

  return (
    <>

        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

        <div className='container'>
        <div className='leftSide'>

      <h1>Zelong Li</h1>

      <div className="tag">

        <div className='tag-container'>

        <button onClick={()=> handleButtonClick(0)}  className={clickedButtonIndex === 0 ? 'clicked' : ''}>
          Science
        </button>

        <button onClick={()=> handleButtonClick(1)}  className={clickedButtonIndex === 1 ? 'clicked' : ''}>
          Art
        </button>
    

        <button onClick={()=> handleButtonClick(2)}  className={clickedButtonIndex === 2 ? 'clicked' : ''}>
          Web
        </button>

        <button onClick={()=> handleButtonClick(3)}  className={clickedButtonIndex === 3 ? 'clicked' : ''}>
          Quantum
        </button>

        <button onClick={()=> handleButtonClick(4)}  className={clickedButtonIndex === 4 ? 'clicked' : ''}>
        Music
        </button>
        </div>
 
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>

      <div>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>

      <div className='rightSide'>
        sjakdpow2jq
      </div>

      </div>
    </>
  )
}

export default App
