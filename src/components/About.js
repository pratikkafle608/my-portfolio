import React from 'react';
import { Window, Reveal } from './Terminal';
import './About.css';

const FACTS = [
  ['user', 'Pratik Kafle'],
  ['role', 'Software Engineer · Java test automation'],
  ['edu', 'B.S. Computer Science'],
  ['school', 'Texas A&M University–Texarkana'],
  ['gpa', '3.86 / 4.00'],
  ['exp', '1.5+ yrs Java test automation @ Caterpillar'],
  ['stack', 'Java, Spring Boot, React, Python, SQL'],
  ['focus', 'Full-stack, AI/LLM apps, CI/CD, QA'],
];

const SUMMARY = [
  'Software engineer with 1.5+ years of Java test automation experience at Caterpillar, building backend testing frameworks and Jenkins CI/CD pipelines that cut regression testing time by 40%.',
  "Pairs a QA engineer's reliability discipline with hands-on full-stack and AI development, building LLM-orchestrated applications with Spring Boot and React (EcoTrac).",
  'Works in an agentic AI development workflow: uses Claude Code for rapid prototyping and pull request review, and custom skills and CLAUDE.md project conventions to enforce consistent code quality.',
];

const COURSEWORK = ['Database Systems', 'Software Engineering', 'DevOps & System Testing', 'AWS Essential Training'];

function About() {
  return (
    <Window id="about" index="01" title="about" command="neofetch --about">
      <div className="neofetch">
        <Reveal className="neofetch-photo" variant="left">
          <img
            src={`${process.env.PUBLIC_URL}/images/kafle.jpg`}
            alt="Pratik Kafle"
            className="about-image"
          />
        </Reveal>
        <div className="neofetch-info">
          <Reveal className="neofetch-head" delay={100}>
            <span className="hl">pratik</span>@<span className="hl">portfolio</span>
            <div className="neofetch-underline">-----------------</div>
          </Reveal>
          {FACTS.map(([key, value], i) => (
            <Reveal key={key} className="fact" delay={150 + i * 70} variant="right">
              <span className="fact-key">{key}</span>
              <span className="fact-value">{value}</span>
            </Reveal>
          ))}
          <Reveal className="swatches" delay={150 + FACTS.length * 70}>
            {['#0b0d0b', '#ff5f56', '#5af78e', '#f3f99d', '#57c7ff', '#ff6ac1', '#9aedfe', '#c9f5cf'].map((c) => (
              <span key={c} style={{ background: c }} />
            ))}
          </Reveal>
        </div>
      </div>

      <div className="about-text">
        <Reveal as="p" className="comment" delay={100}>
          <span className="dim"># cat summary.md</span>
        </Reveal>
        <ul className="summary-list">
          {SUMMARY.map((line, i) => (
            <Reveal as="li" key={line} delay={150 + i * 100}>{line}</Reveal>
          ))}
        </ul>

        <Reveal as="p" className="comment" delay={100}>
          <span className="dim"># cat about.md</span>
        </Reveal>
        <Reveal as="p" delay={150}>
          I’m Pratik Kafle, a passionate and results-driven Computer Science undergraduate at Texas A&amp;M University–Texarkana, with a strong foundation in software development, AI, and data-driven automation. My academic journey (GPA: 3.86/4.00) is backed by hands-on experience in building real-world solutions—from AI-powered chatbots to database-driven management systems.
        </Reveal>
        <Reveal as="p" delay={150}>
          With 3+ years of combined experience in IT support, data automation, and student mentorship, I’ve consistently delivered measurable results—optimizing workflows, improving user satisfaction, and automating complex processes. My toolkit includes Python, Java, SQL, Flask, React.js, and Power BI, with projects that showcase my ability to bridge backend efficiency with frontend usability.
        </Reveal>
        <Reveal as="p" delay={150}>
          I thrive in collaborative environments, enjoy solving problems that matter, and am always eager to explore new technologies that push boundaries. Whether it’s building smarter systems or mentoring others, I bring a high level of dedication, curiosity, and impact to every project I work on.
        </Reveal>

        <Reveal className="education" delay={100}>
          <p className="comment"><span className="dim"># cat education.txt</span></p>
          <p className="education-degree">
            <span className="hl">Bachelor of Science in Computer Science</span> — Texas A&amp;M University–Texarkana
            <span className="education-gpa">GPA: 3.86</span>
          </p>
          <p className="education-course">
            <span className="dim">coursework:</span> {COURSEWORK.join(' · ')}
          </p>
        </Reveal>
      </div>
    </Window>
  );
}

export default About;
