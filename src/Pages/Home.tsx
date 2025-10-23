import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Zap, 
  Database, 
  Globe, 
  Smartphone,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Coffee,
  Heart
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

import Hero from '../Elements/portfolio/Hero';
import SkillsSection from '../Elements/portfolio/SkillsSection';
import ProjectsSection from '../Elements/portfolio/ProjectsSection';
import AboutSection from '../Elements/portfolio/AboutSection';
import ContactSection from '../Elements/portfolio/ContactSection';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Custom cursor effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </div>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

      {/* Scroll indicator */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrollYProgress.get() > 0.1 ? 0 : 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}