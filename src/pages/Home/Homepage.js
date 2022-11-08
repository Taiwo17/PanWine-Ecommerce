import React from 'react'
import Footer from '../../components/Footer'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'
import ProductsSection from '../../components/ProductsSection'

function Homepage() {
  return (
    <>
      <Navbar login={'Login'} signup={'Sign Up'} user={''} />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </>
  )
}

export default Homepage
