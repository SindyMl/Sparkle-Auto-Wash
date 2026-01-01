import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [droplets, setDroplets] = useState<number[]>([]);

  useEffect(() => {
    const dropletCount = 20;
    const dropletsArray = Array.from({ length: dropletCount }, (_, i) => i);
    setDroplets(dropletsArray);
  }, []);

  return (
    <section id="home" className="hero" role="banner">
      {/* Water Droplets Animation */}
      <div className="water-droplets">
        {droplets.map((droplet) => (
          <div
            key={droplet}
            className="droplet"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Revive Your Ride with Sparkle
            <br />
            <span className="hero-title-accent">Where Every Wash Feels Like a Refresh</span>
          </h1>
          <p className="hero-subtitle">
            Eco-friendly, meticulous care for your vehicle. Experience the luxury of a premium car wash that treats your car like royalty.
          </p>
          <a href="#services" className="btn-primary hero-cta" aria-label="Discover our car wash services">
            Discover Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;