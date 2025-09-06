import React from 'react'
import Navbar from '../component/navbar/Navbar.jsx'
import Hero from '../pages/Hero'
import Hero2 from '../pages/Hero2'
import Hero3 from '@/pages/Hero3.jsx'

const App = () => {
  return (
    <div>

      <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
      </div>
    </div>
  )
}

export default App