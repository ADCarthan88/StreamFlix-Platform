// Movie Data
const moviesData = {
    trending: [
        {
            id: 'quantum-nexus',
            title: 'Quantum Nexus',
            description: 'A mind-bending sci-fi thriller about parallel dimensions and quantum mechanics.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 8.7,
            duration: '2h 22m',
            poster: 'https://picsum.photos/400/600?random=1',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'neon-shadows',
            title: 'Neon Shadows',
            description: 'Cyberpunk thriller set in a dystopian future where memories can be stolen.',
            genre: 'Action',
            year: 2024,
            rating: 8.4,
            duration: '2h 8m',
            poster: 'https://picsum.photos/400/600?random=2',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        },
        {
            id: 'stellar-odyssey',
            title: 'Stellar Odyssey',
            description: 'Epic space adventure across the galaxy with stunning visuals.',
            genre: 'Adventure',
            year: 2024,
            rating: 8.9,
            duration: '2h 36m',
            poster: 'https://picsum.photos/400/600?random=3',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'digital-dreams',
            title: 'Digital Dreams',
            description: 'Virtual reality meets consciousness in this thought-provoking drama.',
            genre: 'Drama',
            year: 2024,
            rating: 8.2,
            duration: '2h 14m',
            poster: 'https://picsum.photos/400/600?random=4',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        },
        {
            id: 'midnight-protocol',
            title: 'Midnight Protocol',
            description: 'High-stakes cyber espionage thriller with non-stop action.',
            genre: 'Thriller',
            year: 2023,
            rating: 8.6,
            duration: '2h 1m',
            poster: 'https://picsum.photos/400/600?random=5',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'echo-chamber',
            title: 'Echo Chamber',
            description: 'Psychological horror that explores the depths of human consciousness.',
            genre: 'Horror',
            year: 2024,
            rating: 7.9,
            duration: '1h 55m',
            poster: 'https://picsum.photos/400/600?random=6',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        }
    ],
    recommended: [
        {
            id: 'time-fracture',
            title: 'Time Fracture',
            description: 'A scientist discovers time travel but at a devastating cost.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 8.8,
            duration: '2h 18m',
            poster: 'https://picsum.photos/400/600?random=7',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'neural-link',
            title: 'Neural Link',
            description: 'Brain-computer interfaces blur the line between human and machine.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 8.3,
            duration: '2h 5m',
            poster: 'https://picsum.photos/400/600?random=8',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        },
        {
            id: 'shadow-realm',
            title: 'Shadow Realm',
            description: 'Fantasy epic about a world hidden in the shadows of our reality.',
            genre: 'Fantasy',
            year: 2024,
            rating: 8.5,
            duration: '2h 42m',
            poster: 'https://picsum.photos/400/600?random=9',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'code-red',
            title: 'Code Red',
            description: 'Military thriller about a cyber attack on global infrastructure.',
            genre: 'Thriller',
            year: 2024,
            rating: 8.1,
            duration: '2h 12m',
            poster: 'https://picsum.photos/400/600?random=10',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        }
    ],
    tvShows: [
        {
            id: 'quantum-series',
            title: 'Quantum Series',
            description: 'A TV series exploring parallel universes and quantum physics.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 9.1,
            duration: 'Season 1',
            poster: 'https://picsum.photos/400/600?random=11',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'cyber-city',
            title: 'Cyber City',
            description: 'Cyberpunk series set in a futuristic metropolis.',
            genre: 'Action',
            year: 2024,
            rating: 8.7,
            duration: 'Season 2',
            poster: 'https://picsum.photos/400/600?random=12',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        },
        {
            id: 'mind-games',
            title: 'Mind Games',
            description: 'Psychological thriller series about memory manipulation.',
            genre: 'Thriller',
            year: 2024,
            rating: 8.9,
            duration: 'Season 1',
            poster: 'https://picsum.photos/400/600?random=13',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'space-frontier',
            title: 'Space Frontier',
            description: 'Space exploration series following humanity\'s expansion.',
            genre: 'Adventure',
            year: 2024,
            rating: 8.4,
            duration: 'Season 3',
            poster: 'https://picsum.photos/400/600?random=14',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        }
    ],
    newReleases: [
        {
            id: 'aurora-rising',
            title: 'Aurora Rising',
            description: 'Epic space opera about the last hope for humanity.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 8.6,
            duration: '2h 28m',
            poster: 'https://picsum.photos/400/600?random=15',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        },
        {
            id: 'dark-matter',
            title: 'Dark Matter',
            description: 'Scientists discover dark matter has consciousness.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 8.3,
            duration: '2h 15m',
            poster: 'https://picsum.photos/400/600?random=16',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
        },
        {
            id: 'virtual-escape',
            title: 'Virtual Escape',
            description: 'Trapped in a virtual world, players must find the exit.',
            genre: 'Action',
            year: 2024,
            rating: 8.0,
            duration: '2h 3m',
            poster: 'https://picsum.photos/400/600?random=17',
            trailer: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
        }
    ]
};

// Global Variables
let currentHeroMovie = 0;
const heroMovies = moviesData.trending.slice(0, 3);
let userInteractions = {
    liked: new Set(),
    watchlist: new Set(),
    watched: new Set()
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        initializeApp();
    }, 3000);
});

// Loading Screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Initialize Application
function initializeApp() {
    setupNavigation();
    setupHeroSection();
    loadMovieSections();
    setupSearch();
    setupVideoModal();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', handleNavbarScroll);
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const target = link.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Hero Section Setup
function setupHeroSection() {
    const indicators = document.querySelectorAll('.indicator');
    const muteToggle = document.getElementById('mute-toggle');
    const heroVideo = document.querySelector('.hero-video');
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            changeHeroMovie(index);
        });
    });
    
    muteToggle.addEventListener('click', () => {
        heroVideo.muted = !heroVideo.muted;
        const icon = muteToggle.querySelector('i');
        icon.className = heroVideo.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    });
    
    // Auto-change hero movie
    setInterval(() => {
        currentHeroMovie = (currentHeroMovie + 1) % heroMovies.length;
        changeHeroMovie(currentHeroMovie);
    }, 8000);
}

// Change Hero Movie
function changeHeroMovie(index) {
    currentHeroMovie = index;
    const movie = heroMovies[index];
    
    document.querySelector('.hero-title').textContent = movie.title;
    document.querySelector('.hero-description').textContent = movie.description;
    document.querySelector('.rating').innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;
    document.querySelector('.year').textContent = movie.year;
    document.querySelector('.genre').textContent = movie.genre;
    document.querySelector('.duration').textContent = movie.duration;
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Load Movie Sections
function loadMovieSections() {
    loadMovieGrid('trending-movies', moviesData.trending);
    loadMovieGrid('recommended-movies', moviesData.recommended);
    loadMovieGrid('tv-shows-grid', moviesData.tvShows);
    loadMovieGrid('new-releases', moviesData.newReleases);
}

// Load Movie Grid
function loadMovieGrid(containerId, movies) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    movies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        container.appendChild(movieCard);
    });
}

// Create Movie Card
function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const isLiked = userInteractions.liked.has(movie.id);
    const isInWatchlist = userInteractions.watchlist.has(movie.id);
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <div class="movie-overlay">
                <button class="play-btn" onclick="playMovie('${movie.id}')">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="movie-rating">
                <i class="fas fa-star"></i>
                ${movie.rating}
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-genre">${movie.genre}</span>
                <span>${movie.year}</span>
            </div>
            <p class="movie-description">${movie.description}</p>
            <div class="movie-actions">
                <button class="action-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike('${movie.id}', this)">
                    <i class="fas fa-thumbs-up"></i>
                </button>
                <button class="action-btn" onclick="toggleDislike('${movie.id}', this)">
                    <i class="fas fa-thumbs-down"></i>
                </button>
                <button class="action-btn ${isInWatchlist ? 'watchlist' : ''}" onclick="toggleWatchlist('${movie.id}', this)">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="action-btn" onclick="showMovieInfo('${movie.id}')">
                    <i class="fas fa-info"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Movie Interactions
function toggleLike(movieId, button) {
    if (userInteractions.liked.has(movieId)) {
        userInteractions.liked.delete(movieId);
        button.classList.remove('liked');
        showToast('Removed from liked movies', 'success');
    } else {
        userInteractions.liked.add(movieId);
        button.classList.add('liked');
        showToast('Added to liked movies', 'success');
    }
    
    // Remove from dislikes if present
    userInteractions.disliked?.delete(movieId);
    
    // Simulate API call
    simulateAPICall('POST', '/api/interactions', {
        movie_id: movieId,
        interaction_type: userInteractions.liked.has(movieId) ? 'like' : 'unlike'
    });
}

function toggleDislike(movieId, button) {
    showToast('Thanks for your feedback!', 'success');
    
    // Remove from likes if present
    userInteractions.liked.delete(movieId);
    const likeButton = button.parentElement.querySelector('.liked');
    if (likeButton) likeButton.classList.remove('liked');
    
    // Simulate API call
    simulateAPICall('POST', '/api/interactions', {
        movie_id: movieId,
        interaction_type: 'dislike'
    });
}

function toggleWatchlist(movieId, button) {
    if (userInteractions.watchlist.has(movieId)) {
        userInteractions.watchlist.delete(movieId);
        button.classList.remove('watchlist');
        showToast('Removed from watchlist', 'success');
    } else {
        userInteractions.watchlist.add(movieId);
        button.classList.add('watchlist');
        showToast('Added to watchlist', 'success');
    }
    
    // Simulate API call
    simulateAPICall('POST', '/api/interactions', {
        movie_id: movieId,
        interaction_type: 'watchlist'
    });
}

// Play Movie
function playMovie(movieId) {
    const movie = findMovieById(movieId);
    if (movie) {
        showVideoModal(movie);
        userInteractions.watched.add(movieId);
        
        // Simulate API call
        simulateAPICall('POST', '/api/interactions', {
            movie_id: movieId,
            interaction_type: 'view',
            watch_duration: 0
        });
    }
}

// Find Movie by ID
function findMovieById(movieId) {
    const allMovies = [
        ...moviesData.trending,
        ...moviesData.recommended,
        ...moviesData.tvShows,
        ...moviesData.newReleases
    ];
    return allMovies.find(movie => movie.id === movieId);
}

// Video Modal
function setupVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    
    video.addEventListener('timeupdate', () => {
        // Track viewing progress
        const progress = {
            currentTime: video.currentTime,
            duration: video.duration,
            playedSeconds: video.currentTime
        };
        
        // Simulate progress tracking
        if (Math.floor(video.currentTime) % 10 === 0) {
            simulateAPICall('POST', '/api/interactions', {
                movie_id: video.dataset.movieId,
                interaction_type: 'view',
                watch_duration: video.currentTime
            });
        }
    });
}

function showVideoModal(movie) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const title = document.getElementById('video-title');
    const description = document.getElementById('video-description');
    
    video.src = movie.trailer;
    video.dataset.movieId = movie.id;
    title.textContent = movie.title;
    description.textContent = movie.description;
    
    modal.classList.add('active');
    video.play();
    
    showToast(`Now playing: ${movie.title}`, 'success');
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    
    modal.classList.remove('active');
    video.pause();
    video.src = '';
}

// Carousel Navigation
function scrollCarousel(carouselId, direction) {
    const carousel = document.querySelector(`#${carouselId} .movie-grid`);
    const cardWidth = 300; // Card width + gap
    const scrollAmount = cardWidth * 2;
    
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });
}

function performSearch(query) {
    if (query.length < 2) return;
    
    const allMovies = [
        ...moviesData.trending,
        ...moviesData.recommended,
        ...moviesData.tvShows,
        ...moviesData.newReleases
    ];
    
    const results = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length > 0) {
        showToast(`Found ${results.length} results for "${query}"`, 'success');
        // In a real app, you would display search results
    } else {
        showToast(`No results found for "${query}"`, 'error');
    }
    
    // Simulate API call
    simulateAPICall('GET', `/api/search?q=${encodeURIComponent(query)}`);
}

// Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Show Movie Info
function showMovieInfo(movieId) {
    const movie = findMovieById(movieId);
    if (movie) {
        showToast(`${movie.title} (${movie.year}) - ${movie.genre} - ${movie.rating}/10`, 'success');
    }
}

// Simulate API Calls
function simulateAPICall(method, endpoint, data = null) {
    console.log(`API Call: ${method} ${endpoint}`, data);
    
    // Simulate network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: 'API call successful',
                data: data
            });
        }, Math.random() * 500 + 200);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('video-modal');
    
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeVideoModal();
    }
    
    if (e.key === '/' && !modal.classList.contains('active')) {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe movie sections when they're created
setTimeout(() => {
    document.querySelectorAll('.movie-section').forEach(section => {
        observer.observe(section);
    });
}, 100);

// Performance Optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
setTimeout(lazyLoadImages, 1000);

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    showToast('Something went wrong. Please try again.', 'error');
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}