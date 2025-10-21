'use client';
import { motion } from 'framer-motion';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentMovie, setCurrentMovie] = useState(0);

  const featuredMovies = [
    {
      title: "Quantum Nexus",
      description: "In a world where reality bends to quantum mechanics, one scientist must navigate parallel dimensions to save humanity from an interdimensional collapse.",
      backdrop: "/api/placeholder/1920/1080",
      logo: "/api/placeholder/400/200",
      trailer: "/videos/quantum-trailer.mp4"
    },
    {
      title: "Neon Shadows",
      description: "A cyberpunk thriller set in 2087 where memories can be stolen and identities are currency in the digital underground.",
      backdrop: "/api/placeholder/1920/1080",
      logo: "/api/placeholder/400/200",
      trailer: "/videos/neon-trailer.mp4"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${featuredMovies[currentMovie].backdrop})`
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0 particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Movie Logo */}
            <motion.div
              key={currentMovie}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-6xl lg:text-8xl font-bold gradient-text mb-4">
                {featuredMovies[currentMovie].title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${currentMovie}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {featuredMovies[currentMovie].description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-3 text-lg"
              >
                <Play className="w-6 h-6" fill="currentColor" />
                Play Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-3 text-lg"
              >
                <Info className="w-6 h-6" />
                More Info
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className="glass rounded-full p-3 hover:bg-white/10 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </motion.button>
            </motion.div>

            {/* Movie Indicators */}
            <div className="flex gap-2">
              {featuredMovies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentMovie(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentMovie ? 'w-12 bg-red-600' : 'w-6 bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-streamflix-black to-transparent" />
    </div>
  );
}