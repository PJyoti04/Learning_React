import { useState } from 'react'
// import './App.css'
import Accordions from './components/Accordion'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    </>
  )
}

export default App