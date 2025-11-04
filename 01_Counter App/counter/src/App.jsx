import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
     setCount(count+1)
      
  }

  const decrease = () => {
    if(count>=1){
     setCount(count-1)
    }
  }
    
  

  return (
    <>
                <h1 >Increase : {count}</h1>
                <button onClick={increase}>Increase</button>
    
                <h1 >Decrease : {count}</h1>
                <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
