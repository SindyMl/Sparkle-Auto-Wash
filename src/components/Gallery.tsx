import React, { useState, useEffect, useRef } from 'react';
import '../styles/Gallery.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury sports car after premium wash',
      caption: 'From Dusty to Dazzling',
      category: 'after',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional car washing in progress',
      caption: 'Meticulous Care in Action',
      category: 'process',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Classic car restoration and detailing',
      caption: 'Restoring Beauty to Classics',
      category: 'before-after',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car being washed with water spray',
      caption: 'Sparkling Clean Results',
      category: 'process',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Satisfied customer with their clean car',
      caption: 'Happy Customers, Happy Cars',
      category: 'customers',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team member polishing a luxury vehicle',
      caption: 'Expert Team at Work',
      category: 'team',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Vintage car after thorough detailing',
      caption: 'Preserving Automotive Heritage',
      category: 'before-after',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern car after ceramic coating treatment',
      caption: 'Ultimate Protection Shine',
      category: 'after',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title" className="section-title">Our Work Gallery</h2>
        <p className="section-subtitle">See the sparkle in action</p>

        <div
          ref={galleryRef}
          className={`gallery-grid ${isVisible ? 'visible' : ''}`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(image);
                }
              }}
            >
              <div className="gallery-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-caption">{image.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image"
            />
            <p id="lightbox-caption" className="lightbox-caption">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;