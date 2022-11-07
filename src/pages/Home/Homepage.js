import React from 'react'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'

function Homepage() {
  return (
    <>
      <Navbar login='Login' signup='Sign Up' user={''} />
      <HeroSection />
    </>
  )
}

export default Homepage
