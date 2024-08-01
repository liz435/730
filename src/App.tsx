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

      <div>
      <p className="read-the-docs">
      Zelong Li is a designer and transdisciplinary artist based in New York City, seamlessly integrating technology and the arts. His diverse body of work ranges from immersive physical installations to innovative coding projects, reflecting his unique vision and technical prowess. With a keen eye for detail and a passion for pushing creative boundaries, Zelong's projects captivate audiences and foster new experiences. Fluent in Chinese, he brings a multicultural perspective to his work, enriching his artistic practice. Zelong's dynamic approach continues to inspire and innovate, making him a prominent figure in the contemporary art and design landscape.
      </p>
      </div>



      <div className="tag">
        <div className='read-the-docs'>
          <p>
            Browse Project by Tags
          </p>
        </div>

        <div className='tag-container'>

        <button onClick={()=> handleButtonClick(0)}  className={clickedButtonIndex === 0 ? 'clicked' : ''}>
          Tangible
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


      </div>

      <div className='rightSide'>
        section II
      </div>

      </div>
    </>
  )
}

export default App
