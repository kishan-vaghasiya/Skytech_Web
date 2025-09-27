import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [counts, setCounts] = useState({
    countries: 0,
    clients: 0,
    years: 0,
    quality: 0
  });
  const statsRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const targets = { countries: 50, clients: 1000, years: 15, quality: 99 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          <div className={`stat-item ${isLoaded ? 'fade-in-up' : ''}`}>
            <div className="stat-number">{counts.countries}+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className={`stat-item ${isLoaded ? 'fade-in-up' : ''}`}>
            <div className="stat-number">{counts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className={`stat-item ${isLoaded ? 'fade-in-up' : ''}`}>
            <div className="stat-number">{counts.years}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className={`stat-item ${isLoaded ? 'fade-in-up' : ''}`}>
            <div className="stat-number">{counts.quality}%</div>
            <div className="stat-label">Quality Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
