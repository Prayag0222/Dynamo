'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Lima1 from "../assets/Images/lima.jpg" 
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// --- SVG Icons (Self-contained to avoid import errors) ---

const LoaderIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg>
);

const AlertTriangleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);

const ChevronIcon = ({ expanded }) => (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}><polyline points="6 9 12 15 18 9"></polyline></motion.svg>
);


// --- Component Starts Here ---
const DesignShowcase = () => {
  const features = [
    { id: 1, title: 'Photon-Matrix Headlight', description: 'Our adaptive headlight array casts a brilliant, clear path, reacting to your environment in real-time.' },
    { id: 2, title: 'Holographic Cockpit Display', description: 'A crystal-clear, anti-glare dashboard projects vital stats onto a sleek, minimalist interface.' },
    { id: 3, title: 'Kinetic-Response Seat', description: 'Crafted from memory foam composites, the seat adapts to your form for unparalleled comfort.' },
  ];

  const [expanded, setExpanded] = useState(1);
  const [story, setStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // --- New Spotlight Glow Effect ---
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY }) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 128, 255, 0.3), transparent 80%)`
  );

  const handleGenerateStory = async () => {
    setIsLoading(true);
    setError('');
    setStory('');
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const prompt = "You are a creative writer for a futuristic e-scooter brand, Dynamo.EV. Write a short, thrilling, one-paragraph story about a ride through a sprawling neon-noir city at midnight. The theme is 'electric blue'. Mention the silent hum of the motor, electric blue light trails, and the feeling of becoming one with the night. Keep it stylish and under 80 words.";
    const payload = { contents: [{ parts: [{ text: prompt }] }] };

    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) {
        let errorMessage = `API Error: ${response.status} ${response.statusText}`;
        try { const errorBody = await response.json(); errorMessage = errorBody.error?.message || errorMessage; } catch (e) { /* Ignore */ }
        throw new Error(errorMessage);
      }
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) { setStory(text); } else { throw new Error("The API responded successfully, but didn't generate a story. Please try again."); }
    } catch (err) { setError(err.message); console.error("Gemini API call failed:", err); } finally { setIsLoading(false); }
  };

  return (
    <section className="bg-[#0a192f] text-gray-300 py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
            Engineered Aesthetics.
          </h2>
          <p className="max-w-2xl mx-auto text-blue-200/70">
            A symphony of advanced materials and precision design. Explore the elements that define the Dynamo.EV experience.
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              className="w-full max-w-md h-auto p-1 bg-blue-900/10 rounded-xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ background }}
              />
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px 0px rgba(0, 128, 255, 0.2)',
                    '0 0 30px 5px rgba(0, 128, 255, 0.25)',
                    '0 0 20px 0px rgba(0, 128, 255, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-xl p-3"
              >
                  <Image src={Lima1} alt="Dynamo EV Scooter" className="w-full h-full object-cover rounded-lg relative z-0" priority={false} loading="lazy" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-2 mb-12">
              {features.map((feature) => (
                <div key={feature.id} className="bg-blue-900/20 border border-blue-500/20 rounded-lg overflow-hidden">
                  <button onClick={() => setExpanded(expanded === feature.id ? 0 : feature.id)} className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-gray-100" aria-expanded={expanded === feature.id} aria-controls={`feature-${feature.id}`}>
                    <span>{feature.title}</span>
                    <ChevronIcon expanded={expanded === feature.id} />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded === feature.id && (
                      <motion.div key="content" id={`feature-${feature.id}`} initial="collapsed" animate="open" exit="collapsed" variants={{ open: { opacity: 1, height: 'auto' }, collapsed: { opacity: 0, height: 0 } }} transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}>
                        <p className="px-5 pb-5 text-blue-200/80">{feature.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-100">Visualize the Experience</h3>
                <p className="text-blue-200/70 mb-4">Let our AI craft a unique story of your first ride on the Dynamo.EV.</p>
                <button onClick={handleGenerateStory} disabled={isLoading} className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all transform hover:scale-105 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed" aria-label="Generate a story about riding the Dynamo EV">
                    {isLoading ? ( <LoaderIcon className="animate-spin mr-2" /> ) : ( <span className="mr-2">⚡️</span> )}
                    {isLoading ? 'Generating...' : 'Generate a Story'}
                </button>
                <AnimatePresence>
                  {story && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 text-blue-200 italic border-l-2 border-blue-400 pl-4">{story}</motion.div>)}
                  {error && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-start gap-2 text-red-400"><AlertTriangleIcon /> <p><strong>Error:</strong> {error}</p></motion.div>)}
                </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignShowcase;

