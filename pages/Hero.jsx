'use client'
import React from 'react'
import Image from 'next/image'
import heroImg from '../assets/Images/hero.webp'
import {Playfair_Display} from 'next/font/google'
import WrapButton from '@/components/ui/wrap-button'
import Link from 'next/link'

import { motion } from "framer-motion"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });

const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden object-cover w-full h-screen">
        <Image src={heroImg} alt="Hero Image" fill className="object-cover " priority />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-80 md:opacity-40"></div>

        {/* Left Neon Gradient with pulsing effect */}
        <motion.div
  initial={{ opacity: 0.1 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
  className="absolute top-0 left-0 h-full w-1/2 pointer-events-none hidden md:block"
  style={{
    background: "linear-gradient(to right, rgba(0,123,255,0.25) 0%, rgba(0,123,255,0.12) 20%, rgba(0,123,255,0.01) 40%, rgba(0,123,255,0) 100%)",
    zIndex: 1,
  }}
></motion.div>




        {/* Right Neon Gradient with pulsing effect */}
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.6 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",}}
          className="absolute top-0 right-0 h-full w-1/2 pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(to left, rgba(0,123,255,0.25) 0%, rgba(0,123,255,0.12) 20%, rgba(0,123,255,0.01) 40%, rgba(0,123,255,0) 100%)",
            zIndex: 1,
          }}
        ></motion.div>

        {/* Lower Gradient */}
        <div
          className="absolute bottom-0 right-0 h-1/4 w-full pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(to bottom, rgba(0,5,14,0) 0%, rgba(0,5,14,1) 100%)",
            zIndex: 1,
          }}
        ></div>

        {/* Hero Text */}
        <motion.h1
          initial={{opacity:0,x:-100}}
          animate={{ x: [-200,0,0], opacity: [0,0.1,1], scale: [0.9,1.05,1] }}
          transition={{duration:2,ease:"easeInOut",delay:1}}
          className={`${playfair.className} font-bold text-6xl  sm:text-5xl md:text-7xl lg:text-8xl w-full text-white absolute bottom-[65%]  sm:bottom-[35%] left-1/2 md:left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] px-4`}
        >
          The Future
        </motion.h1>

        <motion.h1
          initial={{opacity:0,x:-200}}
          animate={{ x: [-200,0,0], opacity: [0,0.1,1], scale: [0.9,1.05,1] }}
          transition={{duration:2,ease:"easeInOut",delay:1.3}}
          className={`${playfair.className} font-bold text-5xl sm:text-5xl md:text-7xl lg:text-8xl w-full text-white absolute bottom-[55%] sm:bottom-[20%] left-1/2 md:left-[65%] lg:left-[75%] transform -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] px-4`}
        >
          is Electric
        </motion.h1>

        {/* Eye-catching Subheading - mobile only */}
        <motion.p
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:2,ease:"easeInOut",delay:1.6}}
          className={`${playfair.className} md:hidden text-lg sm:text-xl absolute bottom-[12%] w-full left-1/2 transform -translate-x-1/2 text-center drop-shadow-md px-4  bg-clip-text text-gray-400 font-bold`}
        >
          Ride the Future. Electrify Every Journey.
        </motion.p>

        {/* Optional Additional Tagline */}
        <motion.p
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:2,ease:"easeInOut",delay:1.9}}
          className={`${playfair.className} hidden md:block text-blue-400 text-sm sm:text-base md:text-lg absolute top-10 left-10 drop-shadow-md`}
        >
          ⚡ Experience Innovation at Every Turn
        </motion.p>

      </div>

      {/* CTA Button */}
      <motion.div
        className="absolute left-1/2 bottom-45  sm:bottom-8 md:bottom-10 transform -translate-x-1/2 flex justify-center w-full z-10 px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileTap={{ scale: 0.98 }}
      >
        <a href="/models" tabIndex={-1} className="focus:outline-none">
          <WrapButton
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300
              before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:blur-lg before:opacity-80 before:bg-gradient-to-r before:from-blue-400 before:via-cyan-400 before:to-indigo-500 hover:before:opacity-100"
          >
            Explore Now
          </WrapButton>
        </a>
      </motion.div>

    </div>
  )
}

export default Hero