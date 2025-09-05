import React from 'react'
import Navbar from '../component/navbar/Navbar.jsx'
import Hero from '../pages/Hero'
import Hero2 from '../pages/Hero2'

const App = () => {
  return (
    <div>

      <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
      </div>
    </div>
  )
}

export default App