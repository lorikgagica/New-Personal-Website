import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with advanced filtering, real-time inventory, and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'Stripe'],
    size: 'large'
  },
  {
    title: 'Task Management App',
    description: 'Intuitive productivity tool with drag-and-drop, team collaboration, and analytics.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['Vue.js', 'Firebase'],
    size: 'medium'
  },
  {
    title: 'Portfolio Website',
    description: 'Creative showcase with smooth animations and interactive elements.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['Next.js', 'Framer Motion'],
    size: 'medium'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather visualization with forecasts and location-based insights.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    tags: ['React', 'API Integration'],
    size: 'small'
  },
  {
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'D3.js', 'Python'],
    size: 'small'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                ${project.size === 'small' ? 'md:col-span-2 md:row-span-1' : ''}
              `}
            >
              <Card className="group relative h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-full min-h-[300px]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}