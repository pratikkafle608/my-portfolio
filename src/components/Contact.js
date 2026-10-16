/* src/components/Contact.js */

import React from 'react';
import { Window, Reveal, Prompt } from './Terminal';
import './Contact.css';

const LINKS = [
  { key: 'email', label: 'pratikkafle.intern@gmail.com', href: 'mailto:pratikkafle.intern@gmail.com' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pratik-kafle-263076189/' },
  { key: 'github', label: 'Github', href: 'https://github.com/pratikkafle608' },
];

function Contact() {
  return (
    <>
      <Window id="contact" index="05" title="contact" command="cat contact.txt">
        <Reveal as="p" className="contact-intro">
          <span className="dim"># Contact Me</span>
        </Reveal>
        <ul className="contact-list">
          {LINKS.map((link, i) => (
            <Reveal as="li" key={link.key} delay={100 + i * 120} variant="right">
              <span className="contact-key">{link.key}</span>
              <span className="contact-arrow">→</span>
              <a
                href={link.href}
                target={link.key === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-link"
              >
                {link.label}
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={500}>
          <Prompt cursor />
        </Reveal>
      </Window>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Pratik Kafle</span>
        <span className="dim">process exited with code 0</span>
      </footer>
    </>
  );
}

export default Contact;
