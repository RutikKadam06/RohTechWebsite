import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import ServicesSection from '@/components/services'
import AboutSection from '@/components/about'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <ServicesSection/>
      <AboutSection/>
    </div>
  )
}

export default page
