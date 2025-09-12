'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Power, Send, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// You can replace this with your actual logo component or SVG
const Logo = () => (
  <div className="flex items-center space-x-2">
    <Power className="h-8 w-8 text-emerald-400" />
    <span className="text-2xl font-bold text-white tracking-wider">Dynamo EV</span>
  </div>
);

const FooterLink = ({ children, href }) => (
  <a
    href={href || '#'}
    className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
    aria-label={typeof children === 'string' ? children : 'Footer link'}
  >
    {children}
  </a>
);

const SocialIcon = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href || '#'}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
    aria-label={label || 'Social media link'}
  >
    <Icon className="h-6 w-6" />
  </motion.a>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      setMessage(`Thank you! A confirmation has been sent to ${email}.`);
      setEmail('');
      setTimeout(() => setMessage(''), 5000);
    } else {
      setMessage('Please enter a valid email address.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const quickLinks = ['Models', 'Test Ride', 'About Us', 'Careers', 'Contact'];
  const supportLinks = ['FAQs', 'Find a Dealer', 'Warranty', 'Service Booking'];
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-end font-sans">
      <motion.footer
        className="w-full bg-slate-900/50 text-white backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Use animate for initial load, or whileInView for scroll trigger
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & Mission */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <Logo />
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience the future of urban mobility. Premium electric scooters designed for the modern rider.
              </p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} icon={social.icon} href={social.href} label={social.label} />
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}><FooterLink>{link}</FooterLink></li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Support</h3>
              <ul className="space-y-3 mb-6">
                 {supportLinks.map((link) => (
                  <li key={link}><FooterLink>{link}</FooterLink></li>
                ))}
              </ul>
               <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact Us</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                        <span>123 Volt Avenue, Electric City, 12345</span>
                    </li>
                    <li className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-emerald-400 flex-shrink-0" />
                        <FooterLink href="tel:+1234567890">(123) 456-7890</FooterLink>
                    </li>
                    <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-emerald-400 flex-shrink-0" />
                        <FooterLink href="mailto:support@voltride.com">support@voltride.com</FooterLink>
                    </li>
                </ul>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Join Our Newsletter</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Get the latest on new models, events, and special offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  aria-label="Email for newsletter"
                />
                <motion.button
                  type="submit"
                  className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: '#10b981' }} // emerald-600
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Subscribe <Send className="h-4 w-4" />
                </motion.button>
              </form>
              {message && <p className="text-emerald-400 text-xs mt-3">{message}</p>}
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-gray-500 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} VoltRide Inc. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
