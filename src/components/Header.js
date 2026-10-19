/* src/components/Header.js */

import React, { useEffect, useState } from 'react';
import './Header.css';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact'];

function Header() {
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

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

  return (
    <header className="header">
      <div className="statusbar">
        <a href="#top" className="statusbar-brand">Pratik Kafle</a>
        <nav className="statusbar-nav" aria-label="Sections">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}

export default Header;
