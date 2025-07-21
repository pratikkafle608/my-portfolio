/* src/components/Projects.js */

import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up"> 
      <h2>Projects</h2>

      <div className="projects-container">

      <div className="project">
  <h3><a href="https://github.com/pratikkafle608/faq-bot" target="_blank" rel="noopener noreferrer" className="project-link">
    AI-Powered FAQ Bot</a>
  </h3>    
  <p>A conversational AI assistant designed to help international students navigate F1 visa requirements and campus life.</p>

          <div className="project-video">
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/isDyHbS7n5s" 
              title="FAQ Bot Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <p>Key Features:</p>
          <ul>
            <li>Provides guidance on visa requirements, class registration, and campus resources</li>
            <li>Answers frequently asked questions about international student life</li>
            <li>Connects students with key contacts (international club president, office staff)</li>
            <li>Available 24/7 for immediate assistance with common concerns</li>
          </ul>
        </div>



        <div className="project">
          <h3>
            <a href="https://github.com/pratikkafle608/Hotel" target="_blank" rel="noopener noreferrer" className="project-link">
              Hotel Management Android Application
            </a>
          </h3>
          <p>A mobile solution for managing hotel room assignments with role-based access control.</p>
          <p>Key Features:</p>

           <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/DtHMrCo3ofU" 
              title="Hotel Management App Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <ul>
            <li>Guest check-in/check-out functionality with data persistence</li>
            <li>Role-based views (Admin and Clerk) with different privileges</li>
            <li>Room status management exclusive to admin users</li>
            <li>XML-based UI with intuitive navigation</li>
            <li>Java backend with touch and gesture listeners</li>
          </ul>
        </div>

        <div className="project">
          <h3>
            <a href="https://github.com/pratikkafle608/MusicPlayer" target="_blank" rel="noopener noreferrer" className="project-link">
              Music Player Java Application
            </a>
          </h3>
          <p>A lightweight audio player for WAV, AU, and AIFF files with robust error handling.</p>

          <div className="project-video">
    <iframe 
      width="100%" 
      height="400" 
      src="https://www.youtube.com/embed/LpRd4_Hixfk" 
      title="Music Player Java Application Demo" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  </div>

          <p>Key Features:</p>
          <ul>
            <li>Supports standard audio formats (.wav, .au, .aiff)</li>
            <li>Built using Java's javax.sound.sampled library</li>
            <li>Comprehensive error handling for missing files and unsupported formats</li>
            <li>Stream-based audio loading from file path or classpath</li>
            <li>Automatic playback completion handling</li>
          </ul>
        </div>


        <div className="project">
  <h3>
    <a href="https://github.com/pratikkafle608/MusicDatabaseSystem" target="_blank" rel="noopener noreferrer" className="project-link">
      Music Database System
    </a>
  </h3>
  <p>An Oracle SQL database for managing and analyzing music-related data with robust query capabilities.</p>

  <div className="project-video">
    <iframe 
      width="100%" 
      height="400" 
      src="https://www.youtube.com/embed/KmXfetaItrM" 
      title="Music Database System Demo" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  </div>

  <p>Key Features:</p>
  <ul>
    <li>Four core tables (Artists, Albums, Genres, Songs) with relational constraints</li>
    <li>Complex query support including joins and aggregate functions</li>
    <li>Data integrity enforcement through triggers and validation rules</li>
    <li>Stored procedures for generating custom reports</li>
    <li>Comprehensive CRUD operations for all music entities</li>
  </ul>
</div>


        <div className="project">
          <h3>
            <a href="https://github.com/pratikkafle608/JavaOopProjects/tree/master/OopJavaProjects/src/OopJavProjects" target="_blank" rel="noopener noreferrer" className="project-link">
              Java Object-Oriented Programming Projects
            </a>
          </h3>
          <p>A collection of Java applications demonstrating core OOP principles and design patterns.</p>
          <p>Included Projects:</p>
          <ul>
            <li><strong>ATM Application</strong>: Simulates banking operations with account management</li>
            <li><strong>Hotel Booking System</strong>: Manages room reservations and guest information</li>
            <li><strong>Riddle Game</strong>: Interactive quiz application with scoring system</li>
          </ul>
          <p>Key Concepts Demonstrated:</p>
          <ul>
            <li>Encapsulation, Inheritance, and Polymorphism</li>
            <li>Exception handling and input validation</li>
            <li>File I/O operations</li>
            <li>Modular program design</li>
          </ul>
        </div>


        <div className="project">
          <h3>Library Management System</h3>
          <p>A digital platform that automates and streamlines library operations for staff and patrons.</p>
          <p>Key Features:</p>
          <ul>
            <li>Comprehensive book cataloging with title, author, and availability tracking</li>
            <li>Member management with borrowing history and library card issuance</li>
            <li>Automated check-in/check-out system with due date reminders</li>
            <li>Advanced search functionality with multiple filtering options</li>
            <li>Reporting tools for inventory management and usage statistics</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Projects;
