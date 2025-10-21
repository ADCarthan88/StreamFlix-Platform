'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  poster_url: string;
  rating: number;
  genre: string;
  description?: string;
  duration_minutes?: number;
  release_year?: number;
}

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  onMoviePlay?: (movie: Movie) => void;
}

export default function MovieCarousel({ title, movies, onMoviePlay }: MovieCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    large: 6
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / movies.length;
    const scrollAmount = itemWidth * itemsPerView.desktop;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - itemsPerView.desktop));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.min(movies.length - itemsPerView.desktop, currentIndex + itemsPerView.desktop));
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < movies.length - itemsPerView.desktop;

  return (
    <div className="relative group mb-12">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6 px-6 lg:px-12"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>

        {/* Movies Grid */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="flex-none w-48 sm:w-56 lg:w-64"
            >
              <MovieCard
                movie={movie}
                index={index}
                onPlay={onMoviePlay}
              />
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(movies.length / itemsPerView.desktop) }).map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView.desktop) === index
                  ? 'w-8 bg-red-600'
                  : 'w-2 bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-streamflix-black to-transparent pointer-events-none z-5" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-streamflix-black to-transparent pointer-events-none z-5" />
    </div>
  );
}