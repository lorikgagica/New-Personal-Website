import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Sparkles } from 'lucide-react';
import { Card } from '../../components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-none shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80"
                alt="Profile"
                className="w-full h-[500px] object-cover"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Hey there! I'm a passionate project manager & developer and designer who loves creating beautiful, 
              functional web experiences. With over 5 years of experience, I've worked with 
              startups and established companies to bring their digital visions to life.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing 
              to open-source projects, or enjoying a good cup of coffee while sketching ideas 
              for my next project.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Cups of Coffee</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Passion</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}