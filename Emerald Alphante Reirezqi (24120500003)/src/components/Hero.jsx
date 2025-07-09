import React from 'react';
import profile from '../assets/profile.png';
import '../App.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>DATA SCIENCE <span className="accent">ENTHUSIAST</span></h1>
        <a href="#contact" className="btn-accent">Contact me</a>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Profile" className='shadow-on-hover' style={{borderRadius: '50%'}} />
      </div>
    </section>
  );
}
