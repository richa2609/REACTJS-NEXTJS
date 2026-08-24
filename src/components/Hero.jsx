import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <header className="hero" id="home">
      {/* doodles */}
      <svg className="doodle" style={{ top: 110, left: '6%' }} width="30" height="30" viewBox="0 0 30 30">
        <path d="M4 26 C4 14, 26 14, 26 4" stroke="#DD5232" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="26" cy="4" r="2.5" fill="#DD5232" />
      </svg>
      <svg className="doodle" style={{ top: 180, right: '4%' }} width="40" height="40" viewBox="0 0 40 40">
        <path
          d="M20 4 C24 4 24 12 20 12 C16 12 16 4 20 4 Z M8 16 C8 12 16 12 16 16 C16 20 8 20 8 16 Z M32 16 C32 12 24 12 24 16 C24 20 32 20 32 16 Z M20 36 C13 36 8 30 8 24 C8 20 12 18 20 18 C28 18 32 20 32 24 C32 30 27 36 20 36 Z"
          fill="#F6B93B"
          opacity=".7"
        />
      </svg>

      <div className="container position-relative hero-inner" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5" style={{ paddingTop: '2.5rem' }}>
          <Reveal as="div" className="col-lg-6">
            <span className="eyebrow">
              <i className="fa-solid fa-paw"></i>Welcome to Pawtrail
            </span>
            <h1 className="mt-3">
              The Best Care for Your <span>Best Friend</span>
            </h1>
            <p className="hero-lead mt-3 mb-4">
              At Pawtrail, we provide exceptional care and services for your pets, including grooming, boarding, and
              walking. Trust us to ensure your furry friends are happy.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#appointment" className="btn btn-pawtrail">
                Our Services <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </Reveal>

          <Reveal as="div" className="col-lg-6">
            <div className="hero-art">
              <div className="hero-ring"></div>
              <div className="hero-photo-wrap">
                <img src="https://loremflickr.com/900/950/goldenretriever,owner,smile?lock=210" alt="Woman smiling with her golden retriever outdoors" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="#FDF6EC" d="M0,40 C240,90 480,0 720,25 C960,50 1200,90 1440,35 L1440,80 L0,80 Z"></path>
      </svg>
    </header>
  );
}
