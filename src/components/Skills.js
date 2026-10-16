/* src/components/Skills.js */

import React from 'react';
import { Window, Reveal } from './Terminal';
import './Skills.css';

const SKILL_GROUPS = [
  {
    dir: 'languages-databases',
    label: 'Languages & Databases',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'MySQL', 'HTML/CSS', 'Shell Scripting'],
  },
  {
    dir: 'frameworks-libraries',
    label: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring AI', 'React', 'Node.js', 'Django', 'Flask', 'Apache Tomcat'],
  },
  {
    dir: 'testing-qa',
    label: 'Testing & QA',
    items: ['JUnit', 'Unit Testing', 'Regression Testing', 'Test Case Design', 'Test-Driven Development (TDD)'],
  },
  {
    dir: 'devops-vcs',
    label: 'DevOps & Version Control',
    items: ['Jenkins', 'CI/CD Pipelines', 'Docker', 'AWS (EC2)', 'Git', 'GitHub', 'GitLab', 'npm'],
  },
  {
    dir: 'apis-integration',
    label: 'APIs & Integration',
    items: ['RESTful APIs', 'OpenAI API', 'Google Maps API', 'Climatiq API', 'JavaMail'],
  },
  {
    dir: 'agentic-ai',
    label: 'Agentic AI Development',
    items: ['Claude Code (prototyping, PR review)', 'Claude Code Skills', 'CLAUDE.md', 'AI Agents'],
  },
  {
    dir: 'ai-llm-tooling',
    label: 'AI / LLM Tooling',
    items: ['RAG Pipelines', 'LangChain', 'Spring AI', 'Vector Databases (Qdrant, Chroma)'],
  },
  {
    dir: 'practices',
    label: 'Practices',
    items: ['Agile/Scrum', 'SDLC', 'Requirements Analysis', 'Technical Documentation', 'System Architecture Diagrams'],
  },
];

function Skills() {
  return (
    <Window id="skills" index="02" title="skills" command="tree ~/skills">
      <Reveal as="p" className="skills-root hl">~/skills</Reveal>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.dir} className="skill-group" delay={(i % 2) * 90} variant="scale">
            <div className="skill-group-head">
              <span className="skill-dir">{group.dir}/</span>
              <span className="skill-count">{group.items.length} items</span>
            </div>
            <div className="skill-group-label">{group.label}</div>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li key={item} className="skill-tag">{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Window>
  );
}

export default Skills;
