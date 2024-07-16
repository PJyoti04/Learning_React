import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Add from './components/Add'
import About from './components/About'
import {createBrowserRouter,RouterProvider,BrowserRouter,Route,Routes} from 'react-router-dom'
import Update from './components/Update'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path:"/add",
      element:<Add />
    },
    {
      path:"/about",
      element:<About />
    }
  ])

  return (
    <>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<Add />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App


/* <RouterProvider router={router}>
        <Navbar></Navbar>
      </RouterProvider> 
      <Home></Home> */