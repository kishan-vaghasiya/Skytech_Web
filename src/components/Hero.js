import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className={`hero-text ${isLoaded ? 'fade-in-up' : ''}`}>
          <h1 className="hero-title">
            Premium Food Exports
            <span className="highlight"> Worldwide</span>
          </h1>
          <p className="hero-subtitle">
            Leading exporter of high-quality onion powder, garlic powder, and premium food chips
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Explore Products</a>
            <a href="#contact" className="btn-secondary">Get Quote</a>
          </div>
        </div>
        <div className={`hero-image ${isLoaded ? 'fade-in-right' : ''}`}>
          <div className="floating-products">
            <div className="product-card onion-card">
              <div className="product-icon">🧅</div>
              <span>Onion Powder</span>
            </div>
            <div className="product-card garlic-card">
              <div className="product-icon">🧄</div>
              <span>Garlic Powder</span>
            </div>
            <div className="product-card chips-card">
              <div className="product-icon">🥔</div>
              <span>Premium Chips</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        {/* World Map Background */}
        <div className="world-map">
          <div className="world-globe">
            <div className="globe-inner">
              <div className="continent continent-1"></div>
              <div className="continent continent-2"></div>
              <div className="continent continent-3"></div>
              <div className="continent continent-4"></div>
              <div className="continent continent-5"></div>
              <div className="continent continent-6"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>
        
        {/* Connection Lines */}
        <div className="connection-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
        
        {/* Floating Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        {/* Sea Container Elements */}
        <div className="floating-containers">
          <div className="mini-container container-1">
            <div className="container-icon">📦</div>
          </div>
          <div className="mini-container container-2">
            <div className="container-icon">🚢</div>
          </div>
          <div className="mini-container container-3">
            <div className="container-icon">🌊</div>
          </div>
        </div>
        
        {/* Country Flags */}
        <div className="floating-flags">
          <div className="mini-flag flag-1">🇺🇸</div>
          <div className="mini-flag flag-2">🇬🇧</div>
          <div className="mini-flag flag-3">🇩🇪</div>
          <div className="mini-flag flag-4">🇫🇷</div>
          <div className="mini-flag flag-5">🇨🇦</div>
          <div className="mini-flag flag-6">🇦🇺</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
