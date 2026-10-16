import React, { useEffect, useRef, useState } from 'react';
import useInView, { prefersReducedMotion } from '../hooks/useInView';

// Types `text` out one character at a time once `start` is true.
export function TypedText({ text, start = true, speed = 40, onDone }) {
  const [count, setCount] = useState(0);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!start) return undefined;
    if (prefersReducedMotion()) {
      setCount(text.length);
      if (onDoneRef.current) onDoneRef.current();
      return undefined;
    }
    let i = 0;
    setCount(0);
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) {
        clearInterval(id);
        if (onDoneRef.current) onDoneRef.current();
      }
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);

  return <>{text.slice(0, count)}</>;
}

export function Prompt({ children, cursor = false, path = '~' }) {
  return (
    <div className="prompt">
      <span className="prompt-user">pratik@portfolio</span>
      <span className="prompt-sep">:</span>
      <span className="prompt-path">{path}</span>
      <span className="prompt-sep">$ </span>
      <span className="prompt-cmd">{children}</span>
      {cursor && <span className="cursor" aria-hidden="true" />}
    </div>
  );
}

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

// A section rendered as a terminal window: the command types itself out when
// the window scrolls into view, then the output underneath is revealed.
export function Window({ id, index, title, command, children }) {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [typed, setTyped] = useState(false);

  return (
    <section id={id} ref={ref} className={`section ${inView ? 'in-view' : ''} ${typed ? 'typed' : ''}`}>
      <div className="section-label">
        <span className="section-index">{index}</span>
        <span className="section-rule" />
        <span className="section-name">{title}</span>
      </div>
      <div className="window">
        <div className="window-bar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="window-title">pratik@portfolio: ~/{id}</span>
        </div>
        <div className="window-body">
          <Prompt cursor={!typed}>
            <TypedText text={command} start={inView} onDone={() => setTyped(true)} />
          </Prompt>
          <div className="window-output">{children}</div>
        </div>
      </div>
    </section>
  );
}
