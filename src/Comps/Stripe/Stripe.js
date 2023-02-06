import React from 'react'
import Navbar from './Comps/Navbar'
import Hero from './Comps/Hero'
import Sidebar from './Comps/Sidebar'
import Submenu from './Comps/Submenu'
import { AppProvider } from './Comps/context'
import './Stripe.css'

function Stripe() {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  )
}

export default Stripe
