"use client"
import React from 'react'
import { motion } from 'motion/react'


const Navbar = () => {
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
  <h1 className='font-orbitron text-white text-3xl  font-bold'>Dynamo.EV</h1>
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
      className="hover:text-white cursor-pointer"
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

className=" border-2 text-xl flex justify-center items-center text-white px-4 py-2 rounded-full shadow hover:scale-110 transition-all ease-in-out cursor-pointer w-50 h-11">
Book Test Ride
</motion.button>
</div>
</motion.nav>

        </div>
    </div>
  )
}

export default Navbar