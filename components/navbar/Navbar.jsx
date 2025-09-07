"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <div>
        <motion.nav
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="fixed top-0 left-0 w-full  backdrop-blur-2xl  rounded-b-2xl shadow-md z-50"
>
<div className=" mx-auto px-6 py-6 flex justify-between items-center">
{/* Logo */}
<motion.div
initial={{scale:3}}
animate={{scale:1}}
transition={{duration:0.5,ease:"easeInOut"}}

className='flex flex-col items-center gap-2'>
  <h1 className='font-orbitron text-white text-2xl md:text-3xl  font-bold'>Dynamo.EV</h1>
</motion.div>


{/* Nav Links */}
<motion.ul
  className="hidden md:flex space-x-10 text-gray-300 font-medium text-[22px] font-electrolize"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    hidden: {},
  }}
>
  {["Home", "About", "Scooters", "Gallery", "Contact"].map((text, idx) => (
    <motion.li
      key={text}
      className="hover:text-white hover:scale-105 transition-all ease-in-out duration-75 cursor-pointer"
      variants={{
        hidden: { y: -40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 24 } },
      }}
    >
      {text}
    </motion.li>
  ))}
</motion.ul>


{/* Button */}
<motion.button 
initial={{opacity:0,y:0}}
animate={{opacity:1,y:0}}
transition={{duration:3,ease:"easeInOut"}}

className="hidden md:inline-flex border-2 text-xl justify-center items-center text-white px-4 py-2 rounded-full shadow hover:scale-110 transition-all ease-in-out cursor-pointer h-11">
Book Test Ride
</motion.button>
{/* Mobile hamburger */}
<button
  aria-label="Toggle Menu"
  className="md:hidden inline-flex items-center justify-center text-white focus:outline-none"
  onClick={() => setIsOpen((v) => !v)}
>
  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
</div>
{/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="md:hidden px-6 pb-6"
    >
      <ul className="space-y-3 text-gray-200 font-electrolize">
        {["Home", "About", "Scooters", "Gallery", "Contact"].map((text) => (
          <li key={text} className="py-2 border-b border-white/10">{text}</li>
        ))}
      </ul>
      <button className="mt-4 w-full border-2 text-white px-4 py-2 rounded-full">Book Test Ride</button>
    </motion.div>
  )}
</AnimatePresence>

</motion.nav>

        </div>
    </div>
  )
}

export default Navbar