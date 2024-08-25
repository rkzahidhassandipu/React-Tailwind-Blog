import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
