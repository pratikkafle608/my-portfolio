import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/images/pratik.jpg" // if in public/images
          alt="Pratik Kafle"
          className="about-image"
        />
        <div className="about-text">
          <p>Hi, I’m Pratik Kafle, a passionate developer learning UI design with React! I have higher knowledge in backend development with Java and SpringBoot.</p>
          <p>I’m a 22-year-old male(he/him). I’m deeply interested in exploring AI tools and expanding my understanding of Artificial Neural Networks. As a first-generation student, I’m eager to learn and grow in this field while pursuing my creative interests.</p>
          <p>On a personal note, I’m also a spiritual person who finds immense joy in helping others whenever I can. The sense of relief and fulfillment that comes from being able to make a positive difference in someone’s life is incredibly soothing for the soul—it’s like therapy for me.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
