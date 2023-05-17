import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

export default function Layout() {
  window.scrollTo(0, 0);
  return (
   <>
    <Navbar />
    <Outlet />
    <Footer />
   </>
  )
}
