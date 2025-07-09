import React, { useState, useEffect } from 'react';
import p1 from '../assets/Practice1.png';
import p2 from '../assets/Practice2.png';
import p3 from '../assets/Practice3.png';
import '../App.css';

export default function Projects() {
  const items = [p1, p2, p3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="projects">
      <h2>My recent <span className="accent">Practice</span></h2>
      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-button">‹</button>

        <div className="carousel-slide">
          <img src={items[currentIndex]} alt={`Practice ${currentIndex + 1}`} />
        </div>

        <button onClick={nextSlide} className="carousel-button">›</button>
      </div>

      {/* Indikator dot */}
      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
