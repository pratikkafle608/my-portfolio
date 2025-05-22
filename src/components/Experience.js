import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>FYE Coach</h3>
          <span className="experience-date">May 2024 - May 2025</span>
        </div>
        <div className="experience-item">
          <h3>High School Math Tutor</h3>
          <span className="experience-date">May 2023 - May 2025</span>
        </div>
        <div className="experience-item">
          <h3>IT Support - Kanchan Suppliers</h3>
          <span className="experience-date">July 2019 - May 2022</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;

