import React from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Hero from '../pages/Hero.jsx'
import Hero2 from '../pages/Hero2.jsx'
import Hero3 from '@/pages/Hero3.jsx'
import Footer from '@/components/footer/Footer.jsx'

const App = () => {
  return (
    <div>

      <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Footer/>
      </div>
    </div>
  )
}

export default App