import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ArrowUp, Twitter, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "mailto:patelsananda05@gmail.com",
      icon: <Mail size={24} />,
      label: "Email",
      color: "hover:text-blue-400"
    },
    {
      href: "https://www.linkedin.com/in/sananda-patel-759b78318/",
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      href: "https://github.com",
      icon: <Github size={24} />,
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      href: "https://twitter.com",
      icon: <Twitter size={24} />,
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      href: "https://instagram.com",
      icon: <Instagram size={24} />,
      label: "Instagram",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-purple-900/30 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Let's Connect & Create Together
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg bg-purple-900/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 transition-all duration-300 ${link.color} hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Sananda Patel. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ using React & Tailwind CSS</p>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}