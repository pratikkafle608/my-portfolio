/* src/components/Projects.js */

import React from 'react';
import { Window, Reveal } from './Terminal';
import './Projects.css';

const PROJECTS = [
  {
    name: 'EcoTrac – AI-Powered Carbon-Efficient Route Optimizer',
    slug: 'ecotrac',
    url: 'https://github.com/pratikkafle608/EcoRoute',
    links: [{ label: 'live app', href: 'https://pratik-aspire-a315-53g.tail3e22ba.ts.net/' }],
    date: 'June 2026',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    image: { src: `${process.env.PUBLIC_URL}/images/ecotrac.jpg`, alt: 'EcoTrac Route Optimizer login screen' },
    description: 'An LLM-orchestrated route planner that analyzes live traffic and recommends eco-friendly routes emitting up to 20% less CO2.',
    sections: [
      {
        heading: 'Highlights',
        items: [
          'Engineered a multi-step AI orchestration pipeline combining Google Maps, Climatiq, and LLM APIs to analyze live traffic and generate eco-friendly routes emitting up to 20% less CO2.',
          'Designed RESTful APIs in Spring Boot that process multi-variable trip inputs and return scored AI route recommendations in under 2 seconds.',
          'Designed a normalized MySQL schema with indexing for fast retrieval of historical emissions and route data.',
        ],
      },
    ],
  },
  {
    name: 'No-Food-Left-Behind',
    slug: 'no-food-left-behind',
    url: 'https://github.com/pratikkafle608/No-Food-Left-Behind',
    links: [{ label: 'live demo', href: 'https://no-food-lb.onrender.com/' }],
    description: 'A web application designed to minimize food waste and give back to community solving hunger problem.',
    video: { id: '3dGaPNtOnc8', title: 'No-Food-Left-Behind Demo' },
    sections: [
      {
        heading: 'Key Features',
        items: [
          "Partner restaurants can login or if new sign up and add food they're giving away",
          'Subscribers get automated email through javamail api about new food update',
          'Subcribers can browse food from the database',
        ],
      },
    ],
  },
  {
    name: 'AI-Powered FAQ Bot',
    slug: 'faq-bot',
    url: 'https://github.com/pratikkafle608/faq-bot',
    description: 'A conversational AI assistant designed to help international students navigate F1 visa requirements and campus life.',
    video: { id: 'isDyHbS7n5s', title: 'FAQ Bot Demo' },
    sections: [
      {
        heading: 'Key Features',
        items: [
          'Provides guidance on visa requirements, class registration, and campus resources',
          'Answers frequently asked questions about international student life',
          'Connects students with key contacts (international club president, office staff)',
          'Available 24/7 for immediate assistance with common concerns',
        ],
      },
    ],
  },
  {
    name: 'Hotel Management Android Application',
    slug: 'hotel',
    url: 'https://github.com/pratikkafle608/Hotel',
    description: 'A mobile solution for managing hotel room assignments with role-based access control.',
    video: { id: 'DtHMrCo3ofU', title: 'Hotel Management App Demo' },
    sections: [
      {
        heading: 'Key Features',
        items: [
          'Guest check-in/check-out functionality with data persistence',
          'Role-based views (Admin and Clerk) with different privileges',
          'Room status management exclusive to admin users',
          'XML-based UI with intuitive navigation',
          'Java backend with touch and gesture listeners',
        ],
      },
    ],
  },
  {
    name: 'Music Player Java Application',
    slug: 'music-player',
    url: 'https://github.com/pratikkafle608/MusicPlayer',
    description: 'A lightweight audio player for WAV, AU, and AIFF files with robust error handling.',
    video: { id: 'LpRd4_Hixfk', title: 'Music Player Java Application Demo' },
    sections: [
      {
        heading: 'Key Features',
        items: [
          'Supports standard audio formats (.wav, .au, .aiff)',
          "Built using Java's javax.sound.sampled library",
          'Comprehensive error handling for missing files and unsupported formats',
          'Stream-based audio loading from file path or classpath',
          'Automatic playback completion handling',
        ],
      },
    ],
  },
  {
    name: 'Music Database System',
    slug: 'music-database',
    url: 'https://github.com/pratikkafle608/MusicDatabaseSystem',
    description: 'An Oracle SQL database for managing and analyzing music-related data with robust query capabilities.',
    video: { id: 'KmXfetaItrM', title: 'Music Database System Demo' },
    sections: [
      {
        heading: 'Key Features',
        items: [
          'Four core tables (Artists, Albums, Genres, Songs) with relational constraints',
          'Complex query support including joins and aggregate functions',
          'Data integrity enforcement through triggers and validation rules',
          'Stored procedures for generating custom reports',
          'Comprehensive CRUD operations for all music entities',
        ],
      },
    ],
  },
  {
    name: 'Java Object-Oriented Programming Projects',
    slug: 'java-oop',
    url: 'https://github.com/pratikkafle608/JavaOopProjects/tree/master/OopJavaProjects/src/OopJavProjects',
    description: 'A collection of Java applications demonstrating core OOP principles and design patterns.',
    sections: [
      {
        heading: 'Included Projects',
        items: [
          { strong: 'ATM Application', text: 'Simulates banking operations with account management' },
          { strong: 'Hotel Booking System', text: 'Manages room reservations and guest information' },
          { strong: 'Riddle Game', text: 'Interactive quiz application with scoring system' },
        ],
      },
      {
        heading: 'Key Concepts Demonstrated',
        items: [
          'Encapsulation, Inheritance, and Polymorphism',
          'Exception handling and input validation',
          'File I/O operations',
          'Modular program design',
        ],
      },
    ],
  },
  {
    name: 'Library Management System',
    slug: 'library-management',
    description: 'A digital platform that automates and streamlines library operations for staff and patrons.',
    sections: [
      {
        heading: 'Key Features',
        items: [
          'Comprehensive book cataloging with title, author, and availability tracking',
          'Member management with borrowing history and library card issuance',
          'Automated check-in/check-out system with due date reminders',
          'Advanced search functionality with multiple filtering options',
          'Reporting tools for inventory management and usage statistics',
        ],
      },
    ],
  },
];

const pad = (n) => String(n).padStart(2, '0');

function Project({ project, index, total }) {
  return (
    <Reveal as="article" className="project">
      <header className="project-head">
        <span className="project-count">[{pad(index + 1)}/{pad(total)}]</span>
        <span className="project-path">./{project.slug}</span>
        {project.date && <span className="project-date">{project.date}</span>}
        <span className="project-links">
          {(project.links || []).map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="project-repo">
              {link.label} ↗
            </a>
          ))}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-repo">
              git clone ↗
            </a>
          )}
        </span>
      </header>

      <h3 className="project-title">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="project-desc">{project.description}</p>
      {project.tech && (
        <ul className="project-tech" aria-label="Tech stack">
          {project.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}

      <div className={`project-body ${project.video || project.image ? 'has-video' : ''}`}>
        {project.image && (
          <figure className="project-shot">
            <div className="project-shot-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="project-shot-title">{project.slug}</span>
            </div>
            <img src={project.image.src} alt={project.image.alt} loading="lazy" />
          </figure>
        )}
        {project.video && (
          <div className="project-video">
            <iframe
              src={`https://www.youtube.com/embed/${project.video.id}`}
              title={project.video.title}
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="project-details">
          {project.sections.map((section) => (
            <div key={section.heading} className="project-section">
              <p className="project-section-head">
                <span className="dim">## </span>{section.heading}:
              </p>
              <ul>
                {section.items.map((item) => (
                  <li key={typeof item === 'string' ? item : item.strong}>
                    {typeof item === 'string' ? item : (
                      <><strong>{item.strong}</strong>: {item.text}</>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <Window id="projects" index="03" title="projects" command="ls ~/projects | xargs cat">
      <div className="projects-list">
        {PROJECTS.map((project, i) => (
          <Project key={project.slug} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </Window>
  );
}

export default Projects;
