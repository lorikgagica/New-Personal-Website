import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Database, Globe, Smartphone } from 'lucide-react';
import { Card } from '../../components/ui/card';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Vue, TypeScript, Next.js',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, User Research',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Flutter, iOS/Android',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, Web Vitals, SEO',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, WebGL, Three.js',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse toolkit for bringing ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                >
                  <skill.icon className={`w-8 h-8 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}