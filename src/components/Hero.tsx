import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create a grid of particles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
    }> = [];

    const gridSize = 20; // Distance between particles
    const width = canvas.width;
    const height = canvas.height;

    // Create particles in a grid pattern
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        if (Math.random() > 0.5) { // Add some randomness to the grid
          particles.push({
            x,
            y,
            radius: 2,
            baseX: x,
            baseY: y,
            density: 20,
            color: 'rgba(147, 51, 234, 0.5)'
          });
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Calculate distance between mouse and particle
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 120;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * particle.density;
        const directionY = forceDirectionY * force * particle.density;

        if (distance < maxDistance) {
          particle.x -= directionX;
          particle.y -= directionY;
        } else {
          // Return to grid position
          if (particle.x !== particle.baseX) {
            const dx = particle.x - particle.baseX;
            particle.x -= dx/15;
          }
          if (particle.y !== particle.baseY) {
            const dy = particle.y - particle.baseY;
            particle.y -= dy/15;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections (graph-like structure)
      particles.forEach((particle1) => {
        particles.forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect nearby particles
          if (distance < gridSize * 1.5) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance/(gridSize * 1.5))})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-800/30 to-pink-600/30 blur-3xl -top-48 -left-48"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0.3 }}
          animate={{
            scale: [0.9, 1.3, 0.9],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-l from-blue-600/20 to-purple-800/30 blur-3xl -bottom-48 -right-48"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.3)] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-700 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQE9OXfp1m86_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731335357945?e=1740614400&v=beta&t=Ff7Cw-b6-VAjhwNaFfjOABMTqNaUDzJncjKxsvF4XdM"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ backgroundColor: "rgba(147, 51, 234, 0.3)" }}
            />
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 tracking-tight">
              Sananda Patel
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="text-lg md:text-xl text-purple-300 font-light max-w-2xl hover:text-purple-200 transition-all duration-300 backdrop-blur-sm bg-purple-900/10 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40"
            >
              Undergraduate at IIT Madras, passionate about Printed Circuit Board (PCB) Design, IoT, Robotics, and creating innovative, user-centric solutions.
            </motion.p>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group mt-12 p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 backdrop-blur-sm ring-1 ring-purple-500/30 hover:ring-purple-500/50"
          >
            <ChevronDown size={32} className="text-white group-hover:text-purple-300 transition-colors" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}