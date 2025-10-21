'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ThumbsUp, ThumbsDown, Info, Star } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

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

interface MovieCardProps {
  movie: Movie;
  index: number;
  onPlay?: (movie: Movie) => void;
}

export default function MovieCard({ movie, index, onPlay }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleLike = async (liked: boolean) => {
    setIsLiked(liked);
    // API call to update user preferences
    try {
      await fetch('/api/interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          movie_id: movie.id,
          interaction_type: liked ? 'like' : 'dislike'
        })
      });
    } catch (error) {
      console.error('Failed to update preference:', error);
    }
  };

  const toggleWatchlist = async () => {
    setIsInWatchlist(!isInWatchlist);
    try {
      await fetch('/api/interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          movie_id: movie.id,
          interaction_type: 'watchlist'
        })
      });
    } catch (error) {
      console.error('Failed to update watchlist:', error);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
        {/* Movie Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <motion.img
            src={movie.poster_url || '/api/placeholder/400/600'}
            alt={movie.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{movie.rating}</span>
          </div>

          {/* Play Button Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onPlay?.(movie)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 neon-glow"
                >
                  <Play className="w-8 h-8" fill="currentColor" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
          
          <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
            <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
              {movie.genre}
            </span>
            {movie.release_year && (
              <span>{movie.release_year}</span>
            )}
          </div>

          {movie.description && (
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">
              {movie.description}
            </p>
          )}

          {/* Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex items-center justify-between"
              >
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(true)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isLiked ? 'bg-green-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(false)}
                    className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300"
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleWatchlist}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isInWatchlist ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300"
                >
                  <Info className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover Glow Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl border-2 border-red-500/50 pointer-events-none"
              style={{
                boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}