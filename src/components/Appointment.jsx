import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Appointment() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section" id="appointment">
      <div className="container">
        <Reveal as="div" className="appt-section">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 appt-photo-wrap">
              <svg className="doodle" style={{ top: -20, left: 20 }} width="46" height="46" viewBox="0 0 46 46">
                <g stroke="#F6B93B" strokeWidth="2">
                  <line x1="23" y1="0" x2="23" y2="10" />
                  <line x1="23" y1="36" x2="23" y2="46" />
                  <line x1="0" y1="23" x2="10" y2="23" />
                  <line x1="36" y1="23" x2="46" y2="23" />
                  <line x1="7" y1="7" x2="14" y2="14" />
                  <line x1="32" y1="32" x2="39" y2="39" />
                  <line x1="39" y1="7" x2="32" y2="14" />
                  <line x1="14" y1="32" x2="7" y2="39" />
                </g>
              </svg>
              <div className="appt-photo">
                <img src="https://loremflickr.com/700/900/happyowner,dog,portrait?lock=880" alt="Pet owner smiling with dog before an appointment" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="appt-form-card">
                <span className="eyebrow">
                  <i className="fa-solid fa-paw"></i>Make an Appointment
                </span>
                <h2 className="section-title mt-2">Make Your Pet's Appointment</h2>
                <form className="row g-3 mt-2" onSubmit={handleSubmit}>
                  <div className="col-sm-6">
                    <input className="form-control" placeholder="Enter Your Name..." />
                  </div>
                  <div className="col-sm-6">
                    <input className="form-control" placeholder="Enter Pet's Name..." />
                  </div>
                  <div className="col-sm-6">
                    <input type="email" className="form-control" placeholder="Enter Your Email..." />
                  </div>
                  <div className="col-sm-6">
                    <input className="form-control" placeholder="Enter Your Number..." />
                  </div>
                  <div className="col-sm-6">
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>
                        My pet is a...
                      </option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>
                        My pet is...
                      </option>
                      <option>Grooming</option>
                      <option>Boarding</option>
                      <option>Vet Visit</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="3" placeholder="Enter Your Message..."></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-pawtrail" disabled={sent}>
                      {sent ? (
                        <>
                          Message Sent <i className="fa-solid fa-check ms-1"></i>
                        </>
                      ) : (
                        <>
                          Send Message <i className="fa-solid fa-paper-plane ms-1"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
