'use client'
import React from 'react'
import Image from 'next/image'
import heroImg from '../assets/Images/hero.webp'
import {Roboto_Mono} from 'next/font/google'
import WrapButton from '@/components/ui/wrap-button'
import FlipLink from '@/components/ui/text-effect-flipper'
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div>
        <div className="relative overflow-hidden object-cover w-full h-screen ">
            <Image src={heroImg} alt="" fill className="object-cover" priority />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-35"></div>
            <motion.div

              initial={{opacity:0,X:100}}
              animate={{opacity:1,x:0}}
              transition={{duration:2,ease:"easeInOut"}}

              className="absolute inset-0 pointer-events-none w-100"
              style={{
                background: "linear-gradient(to right, rgba(0,123,255,0.25) 0%, rgba(0,123,255,0.12) 30%, rgba(0,123,255,0.02) 70%, rgba(0,123,255,0) 100%)",
                zIndex: 1,
              }}
            ></motion.div>
             <motion.div

              initial={{opacity:0,X:100}}
              animate={{opacity:1,x:0}}
              transition={{duration:2,ease:"easeInOut"}}

              className="absolute top-0 right-0 h-full w-1/2 pointer-events-none"
              style={{
                background: "linear-gradient(to left, rgba(0,123,255,0.25) 0%, rgba(0,123,255,0.12) 20%, rgba(0,123,255,0.01) 40%, rgba(0,123,255,0) 100%)",
                zIndex: 1,
              }}
            ></motion.div>

                {/* lower gradient */}
                       <div


                    className="absolute bottom-0 right-0 h-1/4 w-full pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,5,14,0) 0%, rgba(0,5,14,0) 00%, rgba(0,5,14,0) , rgba(0,5,14,1) 100%)",
                      zIndex: 1,
                    }}
                    ></div>


            <motion.h1
            initial={{opacity:0,x:-200}}
            animate={{ 
              x: [-200,0 , 0], // 👈 moves up, overshoots a bit, then settles
              opacity: [0, 0.1, 1], 
              scale: [0.9, 1.05, 1] // 👈 premium bounce effect
            }}
            transition={{duration:2,ease:"easeInOut",delay:1}}
            
                className="font-bold text-7xl md:text-8xl w-full text-[#ffffff] absolute bottom-[20%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-[10px_10px_10px_rgba(0,0,0,10)] ">
                 is Electric
            </motion.h1>
              <motion.h1
              ial={{opacity:0,x:-200}}
              animate={{ 
                x: [-200,0 , 0], // 👈 moves up, overshoots a bit, then settles
                opacity: [0, 0.1, 1], 
                scale: [0.9, 1.05, 1] // 👈 premium bounce effect
              }}
              transition={{duration:2,ease:"easeInOut"}}
              
                  className="font-bold text-7xl md:text-8xl w-full text-[#ffffff] absolute bottom-[35%] left-[30%]  transform -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-[10px_10px_10px_rgba(0,0,0,10)]">
                  The Future 
              </motion.h1>
{/*     
      The FlipLink isn't visible because:
      1. It's absolutely positioned with no top/left/right/bottom, so it defaults to top: auto, left: auto (i.e., 0,0 of the nearest positioned ancestor, but may have 0 height/width).
      2. The parent has a black overlay with opacity 0.55, which may cover it.
      3. The FlipLink component does not accept a `className` prop, so the styling is ignored.
      4. The text color may blend with the background.

      To fix, use a visible position and remove the unused className prop:
    */}
   
        </div>

    <motion.div
      className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex justify-center w-full z-10"
      initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
    >
      <WrapButton>
        Explore Now
      </WrapButton>
    </motion.div>




    </div>
  )
}

export default Hero