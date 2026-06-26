import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>IT & Data Support Analyst - Signature Hotel (Jackson, MS)</h3>
          <span className="experience-date">Jan 2026 - June 2026</span>
        </div>
        <div className="experience-item">
          <h3>FYE Coach - Texas A&M University-Texarkana (Texarkana, TX)</h3>
          <span className="experience-date">May 2024 - May 2025</span>
        </div>
         <div className="experience-item">
          <h3>Software Test Engineer - Caterpillar (Tasmania, Australia)</h3>
          <span className="experience-date">May 2023 - Dec 2024</span>
        </div>
        <div className="experience-item">
          <h3>IT Support Analyst - Nepal Investment Bank Limited</h3>
          <span className="experience-date">May 2021 - July 2022</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;

