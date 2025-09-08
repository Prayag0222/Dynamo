'use client';
import Navbar from '@/components/navbar/Navbar';
import React, { useState } from 'react';

// Icon components for a premium, self-contained design
const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ArrowRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);



export default function Contact() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        <Navbar/>
        <main className="max-w-7xl mx-auto pt-24">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">Connect With Us</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Experience the future of mobility. For inquiries, test drives, or partnerships, please reach out. Our team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Side: Contact Info & Map (spans 2 columns) */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-900/50">
                <h2 className="text-2xl font-serif text-white mb-6">Showroom Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="h-6 w-6 text-sky-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Daymond Auto Parts – Dynamo EV</h3>
                      <p className="text-gray-400">Nasrullaganj, Madhya Pradesh, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="h-6 w-6 text-sky-400 flex-shrink-0" />
                    <a href="tel:+919876543210" className="hover:text-white transition-colors duration-300">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MailIcon className="h-6 w-6 text-sky-400 flex-shrink-0" />
                    <a href="mailto:info@dynamoEV.com" className="hover:text-white transition-colors duration-300">info@dynamoEV.com</a>
                  </div>
                </div>
              </div>
              
              <div className="h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.61741517032!2d77.2941930401899!3d22.68050043818314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce53896503c5d%3A0x47e55a12195f22ea!2sNasrullaganj%2C%20Madhya%20Pradesh%20466331!5e0!3m2!1sen!2sin!4v1725789640611!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-2xl border-0 w-full h-full filter grayscale(1) brightness(0.8) contrast(1.2) opacity-80 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
              </div>
            </div>

            {/* Right Side: Contact Form (spans 3 columns) */}
            <div className="lg:col-span-3 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-900/50">
              <h2 className="text-3xl font-serif text-white mb-8">Send a Message</h2>
              <form className="space-y-10">
                {/* Floating Label Input: Name */}
                <div className="relative">
                  <input id="name" name="name" type="text" placeholder=" " className="block w-full px-2 py-3 text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-sky-400 peer" />
                  <label htmlFor="name" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Full Name</label>
                </div>
                {/* Floating Label Input: Contact */}
                <div className="relative">
                  <input id="contact" name="contact" type="text" placeholder=" " className="block w-full px-2 py-3 text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-sky-400 peer" />
                  <label htmlFor="contact" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email or Phone</label>
                </div>
                {/* Floating Label Input: Message */}
                <div className="relative">
                  <textarea id="message" name="message" rows="5" placeholder=" " className="block w-full px-2 py-3 text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-sky-400 peer resize-none"></textarea>
                  <label htmlFor="message" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Inquiry...</label>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center gap-3 bg-sky-500 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 group transform hover:scale-105 hover:bg-sky-400 hover:shadow-2xl hover:shadow-sky-500/30">
                  Submit Inquiry
                  <ArrowRightIcon className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

