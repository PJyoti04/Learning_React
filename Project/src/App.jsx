import { useState } from 'react'
// import './App.css'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Product from './Pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <Navbar count={count} setCount={setCount}></Navbar>
    <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/product" element={<Product count={count} />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<Add />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<Update />} /> */}
      </Routes>
      <Footer></Footer>
    {/* <Home></Home> */}
    </>
  )
}

export default App
