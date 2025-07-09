import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="socials">
        <a href="https://www.linkedin.com/in/emerald-ar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/emergency.05" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}
