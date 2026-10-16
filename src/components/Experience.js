import React from 'react';
import { Window, Reveal } from './Terminal';
import './Experience.css';

const JOBS = [
  {
    hash: 'a3f9c21',
    role: 'IT & Data Support Analyst',
    company: 'Signature Hotel (Jackson, MS)',
    date: 'Jan 2026 - June 2026',
  },
  {
    hash: 'e81d07b',
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
    hash: '7be04d8',
    role: 'FYE Coach',
    company: 'Texas A&M University-Texarkana (Texarkana, TX)',
    date: 'May 2024 - May 2025',
  },
  {
    hash: '51c8e9a',
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
    hash: '0d2b6f4',
    role: 'IT Support Analyst',
    company: 'Nepal Investment Bank Limited',
    date: 'May 2021 - July 2022',
  },
];

function Experience() {
  return (
    <Window id="experience" index="04" title="experience" command="git log --graph --career">
      <ol className="gitlog">
        {JOBS.map((job, i) => (
          <Reveal as="li" key={job.hash} className="commit" delay={i * 120} variant="left">
            <span className="commit-node" aria-hidden="true" />
            <div className="commit-meta">
              <span className="commit-hash">commit {job.hash}</span>
              {i === 0 && <span className="commit-ref">(HEAD -&gt; career)</span>}
              {job.current && <span className="commit-ref">(current)</span>}
            </div>
            <div className="commit-date">Date: {job.date}</div>
            <h3 className="commit-role">{job.role}</h3>
            <div className="commit-company">@ {job.company}</div>
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
    </Window>
  );
}

export default Experience;
