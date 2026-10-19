/* src/components/Contact.js */

import React from 'react';
import { Section, Reveal } from './Section';
import './Contact.css';

const LINKS = [
  { key: 'Email', label: 'pratikkafle.intern@gmail.com', href: 'mailto:pratikkafle.intern@gmail.com' },
  { key: 'LinkedIn', label: 'linkedin.com/in/pratik-kafle', href: 'https://www.linkedin.com/in/pratik-kafle-263076189/' },
  { key: 'GitHub', label: 'github.com/pratikkafle608', href: 'https://github.com/pratikkafle608' },
];

function Contact() {
  return (
    <>
      <Section id="contact" index="05" title="Contact">
        <Reveal as="p" className="contact-intro">
          Feel free to reach out — I'm always happy to connect.
        </Reveal>
        <ul className="contact-list">
          {LINKS.map((link, i) => (
            <Reveal as="li" key={link.key} delay={100 + i * 120} variant="right">
              <span className="contact-key">{link.key}</span>
              <span className="contact-arrow">→</span>
              <a
                href={link.href}
                target={link.key === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-link"
              >
                {link.label}
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Pratik Kafle</span>
      </footer>
    </>
  );
}

export default Contact;
