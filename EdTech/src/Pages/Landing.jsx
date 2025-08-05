import React from 'react'
import Navbar from '../Components/navbar'
import Hero from '../Components/Hero'
import Learn from '../Components/learnmore'
import Course from '../Components/course'
import Experts from '../Components/experts'
import Testimonials from '../Components/testimonials'
import Prices from '../Components/prices'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import WelcomeSection from './WelcomeSection'



const Landing = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Learn />
        <Course />
        <Experts />
        <Testimonials />
        <Prices />
        <Newsletter />
        <Footer />
        <WelcomeSection />
    </div>

  )
}

export default Landing