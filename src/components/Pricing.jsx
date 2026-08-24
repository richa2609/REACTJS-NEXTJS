import Reveal from './Reveal.jsx';

const PLANS = [
  {
    icon: 'fa-solid fa-scissors',
    badgeClass: 'badge-gold',
    title: 'Grooming Services',
    text: '1 Session — pamper your furry friend with our exceptional pet grooming, leaving them looking and feeling their best.',
    price: '$49',
  },
  {
    icon: 'fa-solid fa-syringe',
    badgeClass: 'badge-green',
    title: 'Pet Vaccine',
    text: '1 Session — protect your beloved pet with our vaccine safeguarding their health and happiness for a joyful life together.',
    price: '$79',
  },
  {
    icon: 'fa-solid fa-stethoscope',
    badgeClass: 'badge-blue',
    title: 'Pet Visit',
    text: "1 Session — expert pet care in safe hands. Our doctor visits ensure your furry friend's health and happiness is ok.",
    price: '$99',
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <Reveal as="div" className="pricing-section">
          <svg className="doodle" style={{ top: 36, left: 36 }} width="40" height="60" viewBox="0 0 40 60">
            <path d="M30 6 C10 6 10 30 26 30 C40 30 40 54 16 54" stroke="#DD5232" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
          <svg className="doodle" style={{ top: 24, right: 60 }} width="34" height="34" viewBox="0 0 34 34">
            <path
              d="M17 2 C20 2 20 10 17 10 C14 10 14 2 17 2 Z M4 15 C4 11 12 11 12 15 C12 19 4 19 4 15 Z M30 15 C30 11 22 11 22 15 C22 19 30 19 30 15 Z M17 32 C10 32 4 26 4 20 C4 16 8 14 17 14 C26 14 30 16 30 20 C30 26 24 32 17 32 Z"
              fill="#F6B93B"
            />
          </svg>

          <div className="text-center mx-auto mb-5 section-head">
            <span className="eyebrow justify-content-center">
              <i className="fa-solid fa-paw"></i>Our Pricing<i className="fa-solid fa-paw"></i>
            </span>
            <h2 className="section-title mt-2" style={{ color: '#fff' }}>
              Dog Grooming Services & Pricing
            </h2>
          </div>

          <div className="row g-4">
            {PLANS.map((plan) => (
              <div className="col-md-4" key={plan.title}>
                <div className="price-card">
                  <div className={`price-badge ${plan.badgeClass}`}>
                    <i className={plan.icon}></i>
                  </div>
                  <h4>{plan.title}</h4>
                  <p>{plan.text}</p>
                  <div className="price-amount">
                    {plan.price}
                    <small>/ First session is free</small>
                  </div>
                  <a href="#appointment" className="btn btn-pawtrail w-100 text-center">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
