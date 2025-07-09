import React from 'react';
import illustration1 from '../assets/illustration1.png';
import '../App.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>About <span className="accent">me</span></h2>
        <p>Hello, I am Emerald Alphante Reirezqi 👋🏼 a second semester 
          student in the Data Science study program at Cakrawala University.</p>

        <p>Currently, I am learning the fundamentals of programming, web development, 
          and data. Although I do not have professional experience yet, I am actively working 
          on coursework, personal projects, and self-practice.</p>

        <p>I believe the learning process doesn’t have to wait 
          for perfection — what matters is to keep moving and growing.</p>
      </div>
      <div className="about-image">
        <img src={illustration1} alt="Studying Illustration" className='blur-on-hover' style={{borderRadius: '15%'}} />
      </div>
    </section>
  );
}