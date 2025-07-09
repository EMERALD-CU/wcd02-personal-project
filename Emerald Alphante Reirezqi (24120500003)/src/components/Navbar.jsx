import React from 'react';
import '../App.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="sparkling-star">✨</span> Emerald Alphante Reirezqi
      </div>
      <nav>
        <ul className="navbar-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
