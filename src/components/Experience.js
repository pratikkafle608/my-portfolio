import React from 'react';
import { Section, Reveal } from './Section';
import './Experience.css';

const JOBS = [
  {
    role: 'IT & Data Support Analyst',
    company: 'Signature Hotel (Jackson, MS)',
    date: 'Jan 2026 - June 2026',
  },
  {
    role: 'Computer Support Specialist & System Assistant',
    company: 'Texas A&M University–Texarkana (Texarkana, TX)',
    date: 'Dec 2025 - Present',
    current: true,
    points: [
      'Supported faculty and staff workstations and network connectivity, maintaining 99.9% workstation uptime in line with SLA targets.',
      'Wrote technical documentation and standardized troubleshooting workflows that reduced recurring support tickets by 40%, saving over $10K in operational overhead within 8 months.',
      'Managed user accounts and role-based access control (RBAC) across university enterprise systems.',
    ],
  },
  {
    role: 'FYE Coach',
    company: 'Texas A&M University-Texarkana (Texarkana, TX)',
    date: 'May 2024 - May 2025',
  },
  {
    role: 'Software Test Engineer',
    company: 'Caterpillar Inc. (Tasmania, Australia)',
    date: 'May 2023 - Dec 2024',
    points: [
      'Led design and development of automated backend testing frameworks in Java and JUnit, reducing regression testing time by 40% and manual testing costs by 15%.',
      'Collaborated in a 5-person cross-functional Agile team (sprint planning, code reviews, stand-ups), shipping continuous updates through Jenkins CI/CD pipelines.',
      'Identified backend performance bottlenecks and optimized RESTful authentication flows, improving application security and execution speed.',
      'Maintained test documentation and version-controlled test assets to support policy compliance.',
    ],
  },
  {
    role: 'IT Support Analyst',
    company: 'Nepal Investment Bank Limited',
    date: 'May 2021 - July 2022',
  },
];

function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="gitlog">
        {JOBS.map((job, i) => (
          <Reveal as="li" key={job.role + job.date} className="commit" delay={i * 120} variant="left">
            <span className="commit-node" aria-hidden="true" />
            <div className="commit-meta">
              <span className="commit-date">{job.date}</span>
              {job.current && <span className="commit-ref">Current</span>}
            </div>
            <h3 className="commit-role">{job.role}</h3>
            <div className="commit-company">{job.company}</div>
            {job.points && (
              <ul className="commit-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
