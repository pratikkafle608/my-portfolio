/* src/components/Header.js */

import React, { useEffect, useState } from 'react';
import './Header.css';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact'];

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

function Header() {
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);

      let current = '';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="header">
      <div className="statusbar">
        <a href="#top" className="statusbar-brand">[pratik kafle]</a>
        <nav className="statusbar-nav" aria-label="Sections">
          {SECTIONS.map((id, i) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              <span className="nav-index">{i + 1}:</span>{id}
              {active === id && <span className="nav-star">*</span>}
            </a>
          ))}
        </nav>
        <span className="statusbar-clock">{time}</span>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}

export default Header;
