import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  car: string;
}

const About: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah M.',
      quote: 'Absolutely incredible! My car has never looked this good. The team at Sparkle truly cares about every detail.',
      rating: 5,
      car: 'BMW 3 Series',
    },
    {
      id: 2,
      name: 'James K.',
      quote: 'Best car wash experience I\'ve ever had. The ceramic coating is amazing - water just beads off my car now!',
      rating: 5,
      car: 'Mercedes C-Class',
    },
    {
      id: 3,
      name: 'Lisa P.',
      quote: 'Love their eco-friendly approach! Great service and they actually care about the environment. Highly recommend!',
      rating: 5,
      car: 'Toyota Corolla',
    },
    {
      id: 4,
      name: 'Michael D.',
      quote: 'The full detail package transformed my car. It feels brand new again. Worth every penny!',
      rating: 5,
      car: 'Audi A4',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star active' : 'star'}>★</span>
    ));
  };

  return (
    <section id="about" className="about" aria-labelledby="about-title" ref={sectionRef}>
      <div className="container">
        <h2 id="about-title" className="section-title">About Sparkle Auto Wash</h2>
        <p className="section-subtitle">More than just a car wash</p>

        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-story">
            <div className="story-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="40" cy="40" r="35" stroke="#7FDBFF" strokeWidth="3" fill="none"/>
                <path d="M40 15L40 65M40 15L25 35M40 15L55 35" stroke="#7FDBFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <ellipse cx="40" cy="50" rx="20" ry="12" stroke="#7FDBFF" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Our Story</h3>
            <p>
              At Sparkle Auto Wash, we're more than a service—we're passionate about making your car feel brand new. Our team uses cutting-edge, eco-conscious techniques in a welcoming environment that treats every vehicle like it's our own.
            </p>
            <p>
              Founded with a vision to revolutionize car washing in South Africa, we've combined luxury, sustainability, and meticulous care to create an experience that goes beyond the ordinary. Every wash is a journey of transformation for your vehicle.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h4>Eco-Friendly</h4>
              <p>Using biodegradable products and sustainable practices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <h4>Water Saving</h4>
              <p>Our recycling system saves 50% more water</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>Premium Quality</h4>
              <p>Professional-grade products and expert techniques</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>5-Star Service</h4>
              <p>Consistently rated excellent by our customers</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">What Our Customers Say</h3>
          
          <div className="testimonial-carousel">
            <button
              className="testimonial-nav prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              &#8249;
            </button>

            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span className="testimonial-car">{testimonial.car}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="testimonial-nav next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              &#8250;
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;