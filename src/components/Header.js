/* src/components/Header.js */

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Pratik Kafle</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#Skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

