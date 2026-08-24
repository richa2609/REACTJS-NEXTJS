export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <h5>
              <i className="fa-solid fa-paw me-1" style={{ color: 'var(--coral)' }}></i>Pawtrail
            </h5>
            <p className="mt-2" style={{ fontSize: '.9rem', opacity: 0.8 }}>
              Pawtrail offers exceptional pet care services including grooming, boarding, and walking. Trust us to
              ensure your pets are dedicated and cared for.
            </p>
            <div>
              <a href="#" className="social-dot">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-dot">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-dot">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <h5 style={{ fontSize: '1rem' }}>Pages</h5>
            <ul className="list-unstyled mt-2" style={{ fontSize: '.9rem' }}>
              <li className="mb-2"><a href="#home">Home</a></li>
              <li className="mb-2"><a href="#about">About Us</a></li>
              <li className="mb-2"><a href="#services">Services</a></li>
              <li className="mb-2"><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h5 style={{ fontSize: '1rem' }}>Contact Info</h5>
            <ul className="list-unstyled mt-2" style={{ fontSize: '.9rem' }}>
              <li className="mb-2">
                <i className="fa-solid fa-phone me-2"></i>(555) 123-4567
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i>hello@pawtrail.co
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <div className="foot-hours">
              <h5 style={{ fontSize: '.95rem', color: 'var(--gold)' }}>Working Hours</h5>
              <div className="d-flex justify-content-between" style={{ fontSize: '.85rem' }}>
                <span>Mon – Fri</span>
                <span>8am – 6pm</span>
              </div>
              <div className="d-flex justify-content-between" style={{ fontSize: '.85rem' }}>
                <span>Saturday</span>
                <span>9am – 4pm</span>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,.1)' }} />
        <p className="text-center mb-0" style={{ fontSize: '.8rem', opacity: 0.7 }}>
          © 2026 Pawtrail. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
