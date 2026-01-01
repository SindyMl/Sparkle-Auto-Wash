import React from 'react';
import '../styles/Services.css';

interface Service {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: string;
  twist: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      name: 'Express Wash',
      price: 'R100',
      duration: '15 mins',
      description: 'Quick exterior clean with premium soap, thorough rinse, and spot-free dry.',
      icon: '🫧',
      twist: 'Using biodegradable soaps for a greener clean.',
    },
    {
      id: 2,
      name: 'Deluxe Wash',
      price: 'R200',
      duration: '30 mins',
      description: 'Express wash plus wheel shine and premium tire dressing for that showroom look.',
      icon: '✨',
      twist: 'Includes eco-friendly tire protectant that lasts longer.',
    },
    {
      id: 3,
      name: 'Full Detail',
      price: 'R500',
      duration: '60 mins',
      description: 'Complete interior vacuum, dashboard polish, exterior wax, and window cleaning.',
      icon: '🚗',
      twist: 'Our signature wax formula provides 3-month protection.',
    },
    {
      id: 4,
      name: 'Premium Ceramic Coating',
      price: 'R1,000',
      duration: '2 hours',
      description: 'Long-lasting protection with hydrophobic shine that repels water and contaminants.',
      icon: '💎',
      twist: 'Professional-grade coating with 12-month warranty.',
    },
    {
      id: 5,
      name: 'Eco Interior Deep Clean',
      price: 'R300',
      duration: '45 mins',
      description: 'Steam cleaning using natural products for a fresh, chemical-free interior.',
      icon: '🌿',
      twist: '100% organic cleaning agents safe for families and pets.',
    },
  ];

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">Discover our range of luxury car care packages</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" role="article">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-name">{service.name}</h3>
                  <div className="service-price">{service.price}</div>
                  <div className="service-duration">⏱ {service.duration}</div>
                  <div className="flip-hint">Hover to see details</div>
                </div>
                <div className="service-card-back">
                  <h4 className="back-title">{service.name}</h4>
                  <p className="service-description">{service.description}</p>
                  <div className="service-twist">
                    <strong>✨ {service.twist}</strong>
                  </div>
                  <a href="#contact" className="service-cta">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;