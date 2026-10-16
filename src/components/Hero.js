/* src/components/Hero.js */

import React, { useEffect, useRef, useState } from 'react';
import { Prompt, TypedText } from './Terminal';
import { prefersReducedMotion } from '../hooks/useInView';
import './Hero.css';

const BOOT_LINES = [
  'Mounting /home/pratik',
  'Loading skills.module',
  'Indexing projects/',
  'Starting portfolio.service',
];

function Hero() {
  const heroRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setStartTyping(true), prefersReducedMotion() ? 0 : 1300);
    return () => clearTimeout(id);
  }, []);

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
    <section id="top" className={`hero ${typed ? 'typed' : ''}`} ref={heroRef}>
      <div className="hero-inner">
        <div className="boot">
          {BOOT_LINES.map((line, i) => (
            <div key={line} className="boot-line" style={{ '--i': i }}>
              <span className="boot-ok">[  OK  ]</span> {line}
            </div>
          ))}
        </div>

        <Prompt cursor={!typed}>
          <TypedText text="whoami" start={startTyping} speed={90} onDone={() => setTyped(true)} />
        </Prompt>

        <div className="hero-output">
          <h1 className="hero-name">
            Pratik Kafle<span className="cursor cursor-big" aria-hidden="true" />
          </h1>
          <p className="hero-line">
            <span className="hl">&gt;</span> Software Engineer · Java test automation · Full-stack &amp; AI development
          </p>
          <p className="hero-line">
            <span className="hl">&gt;</span> B.S. Computer Science @ Texas A&amp;M University–Texarkana
          </p>
          <p className="hero-line dim"># 1.5+ yrs test automation @ Caterpillar · GPA 3.86 · Spring Boot, React, LLM APIs</p>

          <div className="hero-actions">
            <a href="#about" className="btn">./about</a>
            <a href="#projects" className="btn">./projects</a>
            <a href="#contact" className="btn btn-solid">./contact</a>
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
