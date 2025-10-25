import AboutSection from '@/components/about'
import Contact from '@/components/Contact'
import HeroSection from '@/components/home'
import Navbar from '@/components/navbar'
import ServicesSection from '@/components/services'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <br/><br/><br/>
      <HeroSection />
      <ServicesSection/>
      <AboutSection/>
       <Contact/>
    </div>
  )
}

export default page
