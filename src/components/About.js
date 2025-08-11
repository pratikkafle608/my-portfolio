import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/images/kafle.jpg" // if in public/images
          alt="Pratik Kafle"
          className="about-image"
        />
        <div className="about-text">
         <p> I’m Pratik Kafle, a passionate and results-driven Computer Science undergraduate at Texas A&M University–Texarkana, with a strong foundation in software development, AI, and data-driven automation. My academic journey (GPA: 3.86/4.00) is backed by hands-on experience in building real-world solutions—from AI-powered chatbots to database-driven management systems.</p>

         <p>With 3+ years of combined experience in IT support, data automation, and student mentorship, I’ve consistently delivered measurable results—optimizing workflows, improving user satisfaction, and automating complex processes. My toolkit includes Python, Java, SQL, Flask, React.js, and Power BI, with projects that showcase my ability to bridge backend efficiency with frontend usability.</p>

         <p>I thrive in collaborative environments, enjoy solving problems that matter, and am always eager to explore new technologies that push boundaries. Whether it’s building smarter systems or mentoring others, I bring a high level of dedication, curiosity, and impact to every project I work on.</p>

        </div>
      </div>
    </section>
  );
}

export default About;
