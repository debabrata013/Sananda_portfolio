import React from 'react';
import { motion } from 'framer-motion';
import ProgressRing from './ProgressRing';
import { Skill } from './types';
import { Code2, ChevronRight } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-black/40 backdrop-blur-sm rounded-xl p-6 hover:bg-black/60 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-bold text-white">{skill.title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {skill.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-purple-300 bg-purple-900/30 border border-purple-500/30 hover:border-purple-500/60 transition-colors"
              >
                <ChevronRight className="w-4 h-4 mr-1" />
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed hover:text-purple-200 transition-colors">
            {skill.description}
          </p>
        </div>
        
        <div className="transform hover:scale-105 transition-transform">
          <ProgressRing percentage={skill.proficiency} />
        </div>
      </div>
    </motion.div>
  );
}