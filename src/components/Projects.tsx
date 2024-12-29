import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Smart Home Automation",
    description: "IoT-based home automation system with mobile app control, temperature monitoring, and smart lighting features",
    image: "/smart-home.jpg", // Add your actual image
    technologies: ["Arduino", "React Native", "IoT", "Firebase"],
    demoLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    title: "Wireless Energy Monitor",
    description: "Real-time power consumption monitoring system with data visualization and energy-saving recommendations",
    image: "/energy-monitor.jpg", // Add your actual image
    technologies: ["ESP32", "MQTT", "Node.js", "Chart.js"],
    demoLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    title: "Automated Plant Care System",
    description: "Microcontroller-based system for automated plant watering and environmental monitoring",
    image: "/plant-care.jpg", // Add your actual image 
    technologies: ["Raspberry Pi", "Python", "Sensors", "Web Dashboard"],
    demoLink: "#", 
    githubLink: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Electronic Projects
          </h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            Showcasing my expertise in electronics, IoT, and embedded systems development
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-purple-900/30 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded-full">
                  <Star size={14} className="fill-current" />
                  <span className="text-sm">Featured</span>
                </div>
              )}
              
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-purple-600 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Circuit animation overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat animate-pulse" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full ring-1 ring-purple-500/20 hover:bg-purple-800/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors group"
                  >
                    <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                    Demo Video
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-purple-300 hover:text-white border border-purple-500 hover:bg-purple-600/20 px-4 py-2 rounded-lg transition-all group"
                  >
                    <Github size={18} className="group-hover:rotate-12 transition-transform" />
                    Schematics
                  </a>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-purple-500/10 blur-xl" />
              </div>
              
              {/* LED-like pulsing dot */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}