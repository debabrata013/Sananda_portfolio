import React from 'react';
import SkillsSection from './components/skills/SkillsSection';
// ... other imports
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Projects />
      <SkillsSection /> {/* Add the new section here */}
      <Experience />
      <Footer />
    </div>
  );
}

export default App;