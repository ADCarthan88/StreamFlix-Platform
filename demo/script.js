// Movie Data with Real Movies
const moviesData = {
    trending: [
        {
            id: 'dune-part-two',
            title: 'Dune: Part Two',
            description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
            genre: 'Sci-Fi',
            year: 2024,
            rating: 8.8,
            duration: '2h 46m',
            poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
            trailer: 'https://www.youtube.com/embed/Way9Dexny3w'
        },
        {
            id: 'oppenheimer',
            title: 'Oppenheimer',
            description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
            genre: 'Biography',
            year: 2023,
            rating: 8.4,
            duration: '3h 0m',
            poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
            trailer: 'https://www.youtube.com/embed/uYPbbksJxIg'
        },
        {
            id: 'avatar-way-of-water',
            title: 'Avatar: The Way of Water',
            description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.',
            genre: 'Adventure',
            year: 2022,
            rating: 7.6,
            duration: '3h 12m',
            poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
            trailer: 'https://www.youtube.com/embed/d9MyW72ELq0'
        },
        {
            id: 'top-gun-maverick',
            title: 'Top Gun: Maverick',
            description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator.',
            genre: 'Action',
            year: 2022,
            rating: 8.3,
            duration: '2h 11m',
            poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
            trailer: 'https://www.youtube.com/embed/qSqVVswa420'
        },
        {
            id: 'spider-man-no-way-home',
            title: 'Spider-Man: No Way Home',
            description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help.',
            genre: 'Action',
            year: 2021,
            rating: 8.2,
            duration: '2h 28m',
            poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
            trailer: 'https://www.youtube.com/embed/JfVOs4VSpmA'
        },
        {
            id: 'the-batman',
            title: 'The Batman',
            description: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham.',
            genre: 'Action',
            year: 2022,
            rating: 7.8,
            duration: '2h 56m',
            poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
            trailer: 'https://www.youtube.com/embed/mqqft2x_Aa4'
        }
    ],
    recommended: [
        {
            id: 'interstellar',
            title: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            genre: 'Sci-Fi',
            year: 2014,
            rating: 8.6,
            duration: '2h 49m',
            poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
            trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E'
        },
        {
            id: 'inception',
            title: 'Inception',
            description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task.',
            genre: 'Sci-Fi',
            year: 2010,
            rating: 8.8,
            duration: '2h 28m',
            poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
            trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
        },
        {
            id: 'the-matrix',
            title: 'The Matrix',
            description: 'A computer programmer discovers that reality as he knows it is a simulation.',
            genre: 'Sci-Fi',
            year: 1999,
            rating: 8.7,
            duration: '2h 16m',
            poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
            trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
        },
        {
            id: 'blade-runner-2049',
            title: 'Blade Runner 2049',
            description: 'A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard.',
            genre: 'Sci-Fi',
            year: 2017,
            rating: 8.0,
            duration: '2h 44m',
            poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
            trailer: 'https://www.youtube.com/embed/gCcx85zbxz4'
        }
    ],
    tvShows: [
        {
            id: 'stranger-things',
            title: 'Stranger Things',
            description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.',
            genre: 'Sci-Fi',
            year: 2016,
            rating: 8.7,
            duration: '4 Seasons',
            poster: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
            trailer: 'https://www.youtube.com/embed/b9EkMc79ZSU'
        },
        {
            id: 'the-last-of-us',
            title: 'The Last of Us',
            description: 'Twenty years after a fungal outbreak, survivors Joel and Ellie journey across a dangerous America.',
            genre: 'Drama',
            year: 2023,
            rating: 8.8,
            duration: '1 Season',
            poster: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            trailer: 'https://www.youtube.com/embed/uLtkt8BonwM'
        },
        {
            id: 'house-of-the-dragon',
            title: 'House of the Dragon',
            description: 'The Targaryen civil war begins. House of the Dragon tells the story of the Targaryen dynasty.',
            genre: 'Fantasy',
            year: 2022,
            rating: 8.4,
            duration: '2 Seasons',
            poster: 'https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg',
            trailer: 'https://www.youtube.com/embed/DotnJ7tTA34'
        },
        {
            id: 'wednesday',
            title: 'Wednesday',
            description: 'Wednesday Addams navigates her years as a student at Nevermore Academy.',
            genre: 'Comedy',
            year: 2022,
            rating: 8.1,
            duration: '1 Season',
            poster: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
            trailer: 'https://www.youtube.com/embed/Di310WS8zLk'
        }
    ],
    newReleases: [
        {
            id: 'guardians-galaxy-3',
            title: 'Guardians of the Galaxy Vol. 3',
            description: 'Peter Quill must rally his team around him to defend the universe and protect one of their own.',
            genre: 'Action',
            year: 2023,
            rating: 7.9,
            duration: '2h 30m',
            poster: 'https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3Zbcy7vu.jpg',
            trailer: 'https://www.youtube.com/embed/u3V5KDHRQvk'
        },
        {
            id: 'john-wick-4',
            title: 'John Wick: Chapter 4',
            description: 'John Wick uncovers a path to defeating The High Table.',
            genre: 'Action',
            year: 2023,
            rating: 7.7,
            duration: '2h 49m',
            poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
            trailer: 'https://www.youtube.com/embed/qEVUtrk8_B4'
        },
        {
            id: 'fast-x',
            title: 'Fast X',
            description: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.',
            genre: 'Action',
            year: 2023,
            rating: 5.8,
            duration: '2h 21m',
            poster: 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
            trailer: 'https://www.youtube.com/embed/32RAq6JzY-w'
        },
        {
            id: 'scream-vi',
            title: 'Scream VI',
            description: 'The survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.',
            genre: 'Horror',
            year: 2023,
            rating: 6.5,
            duration: '2h 3m',
            poster: 'https://image.tmdb.org/t/p/w500/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg',
            trailer: 'https://www.youtube.com/embed/h74AXqw4Opc'
        }
    ]
};

// Global Variables
let currentHeroMovie = 0;
const heroMovies = [
    {
        title: 'Dune: Part Two',
        description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. When faced with a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.',
        rating: 8.8,
        year: 2024,
        genre: 'Sci-Fi',
        duration: '2h 46m',
        background: 'https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=Way9Dexny3w'
    },
    {
        title: 'Oppenheimer',
        description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
        rating: 8.4,
        year: 2023,
        genre: 'Biography',
        duration: '3h 0m',
        background: 'https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=uYPbbksJxIg'
    },
    {
        title: 'Avatar: The Way of Water',
        description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started.',
        rating: 7.6,
        year: 2022,
        genre: 'Adventure',
        duration: '3h 12m',
        background: 'https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=d9MyW72ELq0'
    }
];
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
    
    // Update background video
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo && movie.background) {
        heroVideo.src = movie.background;
    }
    
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

// Play Hero Movie
function playHeroMovie() {
    const heroMovie = heroMovies[currentHeroMovie];
    const movieData = findMovieById('dune-part-two') || moviesData.trending[0];
    
    if (movieData) {
        showVideoModal(movieData);
        userInteractions.watched.add(movieData.id);
        
        // Simulate API call
        simulateAPICall('POST', '/api/interactions', {
            movie_id: movieData.id,
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
    const videoContainer = document.querySelector('.video-container');
    const title = document.getElementById('video-title');
    const description = document.getElementById('video-description');
    
    // Clear existing content
    videoContainer.innerHTML = '';
    
    // Create YouTube iframe
    const iframe = document.createElement('iframe');
    iframe.src = movie.trailer.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') + '?autoplay=1&rel=0';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.dataset.movieId = movie.id;
    
    videoContainer.appendChild(iframe);
    
    title.textContent = movie.title;
    description.textContent = movie.description;
    
    modal.classList.add('active');
    
    showToast(`Now playing: ${movie.title}`, 'success');
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const videoContainer = document.querySelector('.video-container');
    
    modal.classList.remove('active');
    
    // Clear video content to stop playback
    setTimeout(() => {
        videoContainer.innerHTML = '<video id="modal-video" controls><source src="" type="video/mp4">Your browser does not support the video tag.</video>';
    }, 300);
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