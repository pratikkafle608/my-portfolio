import React from 'react';
import { Section, Reveal } from './Section';
import './About.css';

const FACTS = [
  ['Role', 'Software Engineer · Java test automation'],
  ['Education', 'B.S. Computer Science'],
  ['School', 'Texas A&M University–Texarkana'],
  ['GPA', '3.86 / 4.00'],
  ['Experience', '1.5+ yrs Java test automation @ Caterpillar'],
  ['Stack', 'Java, Spring Boot, React, Python, SQL'],
  ['Focus', 'Full-stack, AI/LLM apps, CI/CD, QA'],
];

const SUMMARY = [
  'Software engineer with 1.5+ years of Java test automation experience at Caterpillar, building backend testing frameworks and Jenkins CI/CD pipelines that cut regression testing time by 40%.',
  "Pairs a QA engineer's reliability discipline with hands-on full-stack and AI development, building LLM-orchestrated applications with Spring Boot and React (EcoTrac).",
  'Works in an agentic AI development workflow: uses Claude Code for rapid prototyping and pull request review, and custom skills and CLAUDE.md project conventions to enforce consistent code quality.',
];

const COURSEWORK = ['Database Systems', 'Software Engineering', 'DevOps & System Testing', 'AWS Essential Training'];

function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="about-intro">
        <Reveal className="about-photo" variant="left">
          <img
            src={`${process.env.PUBLIC_URL}/images/kafle.jpg`}
            alt="Pratik Kafle"
            className="about-image"
          />
        </Reveal>
        <dl className="facts">
          {FACTS.map(([key, value], i) => (
            <Reveal key={key} className="fact" delay={100 + i * 70} variant="right">
              <dt className="fact-key">{key}</dt>
              <dd className="fact-value">{value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="about-text">
        <Reveal as="h3" className="about-heading" delay={100}>Summary</Reveal>
        <ul className="summary-list">
          {SUMMARY.map((line, i) => (
            <Reveal as="li" key={line} delay={150 + i * 100}>{line}</Reveal>
          ))}
        </ul>

        <Reveal as="h3" className="about-heading" delay={100}>About me</Reveal>
        <Reveal as="p" delay={150}>
          I’m Pratik Kafle, a passionate and results-driven Computer Science undergraduate at Texas A&amp;M University–Texarkana, with a strong foundation in software development, AI, and data-driven automation. My academic journey (GPA: 3.86/4.00) is backed by hands-on experience in building real-world solutions—from AI-powered chatbots to database-driven management systems.
        </Reveal>
        <Reveal as="p" delay={150}>
          With 3+ years of combined experience in IT support, data automation, and student mentorship, I’ve consistently delivered measurable results—optimizing workflows, improving user satisfaction, and automating complex processes. My toolkit includes Python, Java, SQL, Flask, React.js, and Power BI, with projects that showcase my ability to bridge backend efficiency with frontend usability.
        </Reveal>
        <Reveal as="p" delay={150}>
          I thrive in collaborative environments, enjoy solving problems that matter, and am always eager to explore new technologies that push boundaries. Whether it’s building smarter systems or mentoring others, I bring a high level of dedication, curiosity, and impact to every project I work on.
        </Reveal>

        <Reveal className="education card" delay={100}>
          <h3 className="about-heading">Education</h3>
          <p className="education-degree">
            <span className="hl">Bachelor of Science in Computer Science</span> — Texas A&amp;M University–Texarkana
            <span className="education-gpa">GPA: 3.86</span>
          </p>
          <p className="education-course">
            <span className="dim">Coursework:</span> {COURSEWORK.join(' · ')}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export default About;
