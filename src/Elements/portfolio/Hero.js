import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        style={{ top: '20%', left: '10%' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        style={{ bottom: '20%', right: '10%' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-purple-100"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent leading-tight">
            Lorik Gagica
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Project Manager
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with code and creativity. 
            Turning ideas into elegant, user-centered solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="bg-white/80 backdrop-blur-sm border-2 hover:bg-white"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
            </motion.a>
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-5 h-5 text-purple-600" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}