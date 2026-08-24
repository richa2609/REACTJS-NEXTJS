import useReveal from '../hooks/useReveal.js';

/**
 * Drop-in replacement for the original `<div class="reveal">` pattern.
 * Renders as `as` (default 'div'), fades/slides in once it enters the
 * viewport, and forwards any extra props (id, style, onClick, etc).
 *
 * Usage:
 *   <Reveal className="col-lg-6"> ... </Reveal>
 *   <Reveal as="section" className="testi-card"> ... </Reveal>
 */
export default function Reveal({ as: Tag = 'div', className = '', threshold = 0.15, children, ...rest }) {
  const [ref, isVisible] = useReveal(threshold);

  const classes = `reveal${isVisible ? ' in' : ''}${className ? ` ${className}` : ''}`;

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
