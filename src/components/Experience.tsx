import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';

const experiences = [
  {
    company: "Robotics Club, IIT Madras",
    logo: "/robotics-club-logo.png", // Add actual logo path
    title: "Technical Secretary",
    period: "2023 - Present",
    current: true,
    responsibilities: [
      "Leading a team of 20+ members in robotics projects and competitions",
      "Organizing workshops and technical sessions on robotics and automation",
      "Managing club resources and coordinating with other technical clubs"
    ]
  },
  {
    company: "PCB Design Team, IIT Madras",
    logo: "/pcb-team-logo.png", // Add actual logo path
    title: "Core Team Member",
    period: "2022 - 2023",
    current: false,
    responsibilities: [
      "Designed and developed complex multi-layer PCBs for various projects",
      "Collaborated with interdisciplinary teams for IoT solutions",
      "Mentored junior members in PCB design fundamentals"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Experience & Leadership
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative transform hover:scale-102 transition-all duration-300"
            >
              <div className="md:flex items-start gap-8 bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl">
                <div className="hidden md:block w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-purple-500/50">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Building className="w-5 h-5 text-purple-400" />
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="px-4 py-1 text-sm bg-purple-600/80 text-white rounded-full font-semibold animate-pulse">
                        Current Role
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <p className="text-purple-200 text-lg font-medium">{exp.title}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 hover:text-purple-300 transition-colors">
                        <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                        <span className="text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}