import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="container">
      <Reveal as="div" className="newsletter">
        <svg className="doodle" style={{ bottom: 20, left: 30 }} width="30" height="30" viewBox="0 0 30 30">
          <path d="M2 28 C2 16, 24 16, 24 4" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".5" />
        </svg>
        <h2 className="section-title" style={{ color: '#fff' }}>
          Subscribe Our Newsletter
        </h2>
        <p style={{ opacity: 0.9, maxWidth: 480, margin: '0 auto 1.6rem' }}>
          Get the latest deals and offers right to your inbox.
        </p>
        <form className="d-flex justify-content-center" style={{ maxWidth: 420, margin: '0 auto' }} onSubmit={handleSubmit}>
          <input type="email" className="form-control" placeholder="Your email address" required />
          <button className="newsletter-btn" type="submit">
            {subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </Reveal>
    </section>
  );
}
