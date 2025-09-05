'use client'
import React, { useRef } from 'react'
import { TextScroll } from '@/components/ui/text-scroll'
import {  Michroma } from "next/font/google";
import heroImg from "../assets/Images/hero2.jpg"
import MaskedDiv from '@/components/ui/masked-div';
import { easeOut, motion, useInView } from "framer-motion"; 



const michroma = Michroma({ subsets: ["latin"], weight: ['400'] });



const Hero2 = () => {
  // Row 1
  const refV1 = useRef(null);
  const inViewV1 = useInView(refV1, { amount: 0.2, once: false });
  const refT1 = useRef(null);
  const inViewT1 = useInView(refT1, { amount: 0.4, once: false });

  // Row 2
  const refV2 = useRef(null);
  const inViewV2 = useInView(refV2, { amount: 0.2, once: false });
  const refT2 = useRef(null);
  const inViewT2 = useInView(refT2, { amount: 0.3, once: false });

  // Row 3
  const refV3 = useRef(null);
  const inViewV3 = useInView(refV3, { amount: 0.2, once: false });
  const refT3 = useRef(null);
  const inViewT3 = useInView(refT3, { amount: 0.3, once: false });

  // Row 4
  const refV4 = useRef(null);
  const inViewV4 = useInView(refV4, { amount: 0.2, once: false });
  const refT4 = useRef(null);
  const inViewT4 = useInView(refT4, { amount: 0.3, once: false });

  return (
    <div>
     
        <div>
        <div className=' bg-[#00040B] py-5'>
        <TextScroll
        className={`${michroma.className} font-display text-center text-4xl font-semibold tracking-tighter text-gray-100 dark:text-white md:text-5xl md:leading-[5rem] pb-4`}
        text="Dynamo.EV"
        default_velocity={2} />
    </div>
        </div>
        

        
        
       
        <div className="relative max-w-full ">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroImg.src ? heroImg.src : heroImg}
              alt="Background"
              className="h-full w-full object-cover"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="mx-auto max-w-6xl flex flex-col gap-40 px-4 py-10">
            <div className="flex flex-col items-center gap-6 md:flex-row-reverse">
             





             {/* Div 1 */}
              <motion.div 
              ref={refV1}
              initial={{ opacity: 0, x: 300 }}
              animate={inViewV1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }} 
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2  ">
                <MaskedDiv maskType="type-1" size={0.8} className="my-0 ">
                  <video
                    className="cursor-pointer transition-all duration-300 hover:scale-105 bg-cover   "
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="/videos/charging.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MaskedDiv>
              </motion.div>

              
              <motion.div 
              ref={refT1}
              initial={{ opacity: 0, x: -300 }}
              animate={inViewT1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2">
                <div className="rounded-lg bg-black/40 p-6 text-white backdrop-blur-md border border-gray-500 shadow-[0_0_24px_4px_rgba(100,200,255,0.1)]">
                  <h2 className="text-4xl font-semibold pb-5">⚡ Fast Charging, Anytime</h2>
                  <p className="mt-3 text-gray-200 text-xl font-light">Charge your scooter up to 80% in minutes with advanced fast-charging technology. Stay powered, stay unstoppable.</p>
                </div>
              </motion.div>
            </div>







              {/* DIV 2 */}
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <motion.div 
              ref={refV2}
              initial={{ opacity: 0, x: -300 }}
              animate={inViewV2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:w-1/2">
                <MaskedDiv maskType="type-1" size={0.8} className="rotate-180">
                  <video
                    className="cursor-pointer transition-all duration-300 hover:scale-105 rotate-180"
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="/videos/battery.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MaskedDiv>
              </motion.div>
              <motion.div 
              ref={refT2}
              initial={{ opacity: 0, x: 300 }}
              animate={inViewT2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2">
                <div className="rounded-lg bg-black/40 p-6 text-white backdrop-blur-md shadow-[0_0_24px_4px_rgba(100,200,255,0.1)]">
                  <h2 className="text-4xl font-semibold pb-5">🔋 Long-Lasting Battery</h2>
                  <p className="mt-3 text-gray-200">Experience extended range with our advanced battery technology. Ride longer, worry less, and explore more of your city.</p>
                </div>
              </motion.div>
            </div>








              {/* DIV 3 */}
            <div className="flex flex-col items-center gap-6 md:flex-row-reverse">
              <motion.div 
              ref={refV3}
              initial={{ opacity: 0, x: 300 }}
              animate={inViewV3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2">
                <MaskedDiv maskType="type-3"  className="my-0 scale-110">
                  <video
                    className="cursor-pointer transition-all duration-300 hover:scale-105"
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="/videos/ride1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MaskedDiv>
              </motion.div>
              <motion.div 
              ref={refT3}
              initial={{ opacity: 0, x: -300 }}
              animate={inViewT3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2">
                <div className="rounded-lg bg-black/40 p-6 text-white backdrop-blur-md border-gray-500 border mr-10 shadow-[0_0_24px_4px_rgba(100,200,255,0.1)] ">
                  <h2 className="text-4xl font-semibold pb-5">🏍️ Smooth Riding Experience</h2>
                  <p className="mt-3 text-gray-200">Feel the difference with our premium suspension and ergonomic design. Every ride is comfortable, stable, and enjoyable.</p>
                </div>
              </motion.div>
            </div>







              {/* DIV 4 */}
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <motion.div 
              ref={refV4}
              initial={{ opacity: 0, x: -300 }}
              animate={inViewV4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2">
                <MaskedDiv maskType="type-2"  className="my-0 scale-110 ">
                  <video
                    className="cursor-pointer transition-all duration-300 hover:scale-105"
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="/videos/scooter.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MaskedDiv>
              </motion.div>
              <motion.div 
              ref={refT4}
              initial={{ opacity: 0, x: 300 }}
              animate={inViewT4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2 ">
                <div className="rounded-lg bg-black/40 p-6 text-white backdrop-blur-md ml-20 ">
                  <h2 className="text-4xl font-semibold pb-5">⚡ Smart Electric Scooter</h2>
                  <p className="mt-3 text-gray-200">Discover the future of urban mobility with our intelligent electric scooter. Eco-friendly, efficient, and built for the modern commuter.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Hero2