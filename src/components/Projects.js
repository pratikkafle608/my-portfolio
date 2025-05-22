/* src/components/Projects.js */

import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up"> 
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>AI-Powered Chatbot</h3>    
          <p>I developed an online chatbot designed to assist international students with common concerns related to their F1 visa. It provides guidance on how to efficiently register for classes, build meaningful connections, and navigate campus life. The chatbot also offers answers to frequently asked questions (FAQs) and shares contact information for key individuals, such as the president of the college's international club, the head of the international office, and other important roles. This project aims to support international students in overcoming challenges and making the most of their academic experience.</p>
        </div>
        <div className="project">
          <h3>Library Management System</h3>
          <p>A Library Management System (LMS) is a digital platform designed to automate and streamline the operations of a library, enhancing efficiency for both staff and users. It centralizes tasks such as cataloging books, managing member accounts, tracking loans and returns, monitoring inventory, and generating reports. Key features often include:</p>
          <p>Book Cataloging: Organizing resources (books, e-books, journals) with details like title, author, genre, and availability.</p>
          <p>User Management: Registering members, issuing library cards, and tracking borrowing history.</p>
          <p>Circulation Control: Facilitating check-in/check-out processes, managing due dates, and sending automated reminders for overdue items.</p>
          <p>Search Functionality: Enabling users to quickly locate resources via filters like title, author, or ISBN.</p>
        </div>
        <div className="project">
          <h3>Music Database System</h3>
          <p>Develop a comprehensive database to efficiently manage information about artists, albums, songs, and genres</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
