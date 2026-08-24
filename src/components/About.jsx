import Reveal from './Reveal.jsx';
import aboutBanner from '../assets/IMAGES/about-section-banner.webp';

const ABOUT_POINTS = [
  'Over 10 years of experience',
  'Exercise & mental stimulation',
  '20 talented vets ready to help',
  'Dental hygiene care',
  'High-quality products only',
  'Regular vet check-ups',
];

export default function About() {
  return (
    <section className="section pt-0" id="about">
      <div className="container">
        <Reveal as="div" className="about-section">
          <svg className="doodle" style={{ top: 24, left: 24 }} width="26" height="26" viewBox="0 0 26 26">
            <path d="M2 22 C2 12, 22 12, 22 2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".6" />
          </svg>

          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about-photo">
                <img src={aboutBanner} alt="Pet owner embracing her dog" />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="eyebrow">
                <i className="fa-solid fa-paw"></i>About Pawtrail
              </span>
              <h2 className="section-title mt-2">Our Journey to Pawtrail — A Passion for Pets</h2>
              <p className="mt-3 mb-4" style={{ color: '#5c6b62' }}>
                Pawtrail started as a two-person dog-walking route and grew into a full care studio because our
                neighbors kept asking for more. Every service is built around one idea: pets do better with
                consistency, patience and people who actually know them.
              </p>
              <ul className="about-list list-unstyled row">
                {ABOUT_POINTS.map((point) => (
                  <li className="col-sm-6" key={point}>
                    <i className="fa-solid fa-circle-check"></i>
                    {point}
                  </li>
                ))}
              </ul>
              <a href="#appointment" className="btn btn-pawtrail mt-2">
                More About Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}