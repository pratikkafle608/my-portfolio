import React from 'react';
import useInView from '../hooks/useInView';

// Fades/slides its content in when scrolled into view. `delay` is in ms.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, variant = 'up', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// A page section with a numbered heading that animates in on scroll.
export function Section({ id, index, title, children }) {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id={id} ref={ref} className={`section ${inView ? 'in-view' : ''}`}>
      <div className="section-label">
        <span className="section-index">{index}</span>
        <h2 className="section-name">{title}</h2>
        <span className="section-rule" />
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
