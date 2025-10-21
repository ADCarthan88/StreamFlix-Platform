'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MovieCarousel from '../components/MovieCarousel';
import VideoPlayer from '../components/VideoPlayer';

interface Movie {
  id: string;
  title: string;
  poster_url: string;
  rating: number;
  genre: string;
  description?: string;
  duration_minutes?: number;
  release_year?: number;
  video_url?: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration
  const mockMovies: Movie[] = [
    {
      id: '1',
      title: 'Quantum Nexus',
      description: 'A mind-bending sci-fi thriller about parallel dimensions',
      genre: 'Sci-Fi',
      release_year: 2024,
      duration_minutes: 142,
      rating: 8.7,
      poster_url: '/api/placeholder/400/600',
      video_url: '/videos/quantum-nexus.mp4'
    },
    {
      id: '2',
      title: 'Neon Shadows',
      description: 'Cyberpunk thriller set in a dystopian future',
      genre: 'Action',
      release_year: 2024,
      duration_minutes: 128,
      rating: 8.4,
      poster_url: '/api/placeholder/400/600',
      video_url: '/videos/neon-shadows.mp4'
    },
    {
      id: '3',
      title: 'The Last Echo',
      description: 'A haunting drama about memory and loss',
      genre: 'Drama',
      release_year: 2023,
      duration_minutes: 115,
      rating: 9.1,
      poster_url: '/api/placeholder/400/600',
      video_url: '/videos/last-echo.mp4'
    },
    {
      id: '4',
      title: 'Stellar Odyssey',
      description: 'Epic space adventure across the galaxy',
      genre: 'Adventure',
      release_year: 2024,
      duration_minutes: 156,
      rating: 8.9,
      poster_url: '/api/placeholder/400/600',
      video_url: '/videos/stellar-odyssey.mp4'
    },
    {
      id: '5',
      title: 'Digital Dreams',
      description: 'Virtual reality meets consciousness',
      genre: 'Sci-Fi',
      release_year: 2024,
      duration_minutes: 134,
      rating: 8.2,
      poster_url: '/api/placeholder/400/600',
      video_url: '/videos/digital-dreams.mp4'
    },
    {
      id: '6',
      title: 'Midnight Protocol',
      description: 'High-stakes cyber espionage thriller',
      genre: 'Thriller',
      release_year: 2023,
      duration_minutes: 121,
      rating: 8.6,
      poster_url: '/api/placeholder/400/600',
      video_url: '/videos/midnight-protocol.mp4'
    }
  ];

  useEffect(() => {
    fetchMovies();
    fetchRecommendations();
  }, []);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMovies(mockMovies);
      setError(null);
    } catch (err) {
      setError('Failed to fetch movies');
      toast.error('Failed to load movies');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRecommendations = async () => {
    try {
      // Simulate API call for recommendations
      await new Promise(resolve => setTimeout(resolve, 1200));
      setRecommendations(mockMovies.slice(0, 4));
    } catch (err) {
      console.error('Failed to fetch recommendations:', err);
    }
  };

  const handleMoviePlay = (movie: Movie) => {
    setSelectedMovie(movie);
    toast.success(`Now playing: ${movie.title}`);
  };

  const handleMovieProgress = (progress: any) => {
    if (!selectedMovie) return;
    
    // Track viewing progress for recommendations
    fetch('/api/interactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        movie_id: selectedMovie.id,
        interaction_type: 'view',
        watch_duration: progress.playedSeconds
      })
    }).catch(err => console.error('Failed to track progress:', err));
  };

  const closePlayer = () => {
    setSelectedMovie(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-streamflix-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="spinner mb-4" />
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-bold gradient-text"
          >
            Loading StreamFlix...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-streamflix-black">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1F1F1F',
            color: '#fff',
            border: '1px solid #333',
          },
        }}
      />

      <Navigation />

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={closePlayer}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full h-full max-w-6xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <VideoPlayer
                url={selectedMovie.video_url || ''}
                poster={selectedMovie.poster_url}
                onProgress={handleMovieProgress}
              />
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors duration-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Hero />

      {/* Content Sections */}
      <div className="relative z-10 -mt-32">
        {/* Trending Now */}
        <MovieCarousel
          title="Trending Now"
          movies={movies.slice(0, 6)}
          onMoviePlay={handleMoviePlay}
        />

        {/* Recommended for You */}
        {recommendations.length > 0 && (
          <MovieCarousel
            title="Recommended for You"
            movies={recommendations}
            onMoviePlay={handleMoviePlay}
          />
        )}

        {/* New Releases */}
        <MovieCarousel
          title="New Releases"
          movies={movies.slice(2, 8)}
          onMoviePlay={handleMoviePlay}
        />

        {/* Popular Movies */}
        <MovieCarousel
          title="Popular Movies"
          movies={movies.slice(1, 7)}
          onMoviePlay={handleMoviePlay}
        />

        {/* Sci-Fi Collection */}
        <MovieCarousel
          title="Sci-Fi Collection"
          movies={movies.filter(movie => movie.genre === 'Sci-Fi')}
          onMoviePlay={handleMoviePlay}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-streamflix-black py-12 mt-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">StreamFlix</h3>
            <p className="text-gray-400 mb-6">
              Your premium destination for unlimited entertainment
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}