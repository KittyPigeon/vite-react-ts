import { useState, useEffect } from 'react'
import Count from './components/count'

import './App.css'

function App() {
  const [isShow, setIsShow] = useState(true)
  console.log(import.meta.env)
  return (
    <div className="App">
      {isShow ? <Count></Count> : ''}
      <button onClick={() => { setIsShow((show)=>show=!show) }}>变化</button>
    </div>
  )
}

export default App
