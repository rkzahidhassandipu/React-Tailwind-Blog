import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
