/* src/components/Hero.js */

import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/useInView';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  // Parallax: drift the hero content up and fade it out as the page scrolls.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let frame = null;
    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const el = heroRef.current;
        if (!el) return;
        const ratio = Math.min(window.scrollY / window.innerHeight, 1);
        el.style.setProperty('--hero-scroll', ratio.toFixed(3));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-output">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Pratik Kafle</h1>
          <p className="hero-line">
            Software Engineer · Java test automation · Full-stack &amp; AI development
          </p>
          <p className="hero-line">
            B.S. Computer Science @ Texas A&amp;M University–Texarkana
          </p>
          <p className="hero-line dim">1.5+ yrs test automation @ Caterpillar · GPA 3.86 · Spring Boot, React, LLM APIs</p>

          <div className="hero-actions">
            <a href="#about" className="btn">About me</a>
            <a href="#projects" className="btn">View projects</a>
            <a href="#contact" className="btn btn-solid">Get in touch</a>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <span>scroll</span>
        <span className="scroll-hint-arrow">↓</span>
      </a>
    </section>
  );
}

export default Hero;
