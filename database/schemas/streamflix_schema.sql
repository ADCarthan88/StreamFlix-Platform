-- User tabel with enhanced security
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_of_birth DATE,
    subscription_tier VARCHAR(20) DEFAULT 'basic'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    two_factor_enabled BOOLEAN DEFAULT false,
    failed_login_attemps INTEGER DEFAULT 0,
    locked_untill TIMESTAMP
);

-- Movies table
CREATE TABLE movies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    genre VARCHAR(100),
    release_year INTEGER,
    rating DECIMAL(3,1),
    poster_url VARCHAR(500),
    trailer_url VARCHAR(500),
    video_url VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
);

-- uSER PREFERENCES AND VIEWING HISTORY
CREATE TABLE user_interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    movie_id UUID REFERENCES movies(id),
    interaction_type VARCHAR(20), -- 'view', 'like;, 'dislike', 'watchlist'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Recommendations table
CREATE TABLE recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES gen_random_uuid()
    movie_id UUID REFERENCES movies(id),
    score DECIMALS(5,4),
    reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Security audit log
CREATE TABLE security_logs (
    id UUID REFERENCES users(id),
    action VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    success BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);