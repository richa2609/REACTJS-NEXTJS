import Reveal from './Reveal.jsx';

const LEFT_ITEMS = [
  {
    icon: 'fa-solid fa-user-graduate',
    title: 'Experienced Professionals',
    text: "Our team consists of highly trained and passionate pet care experts dedicated to your pet's wellbeing.",
  },
  {
    icon: 'fa-solid fa-house-chimney-heart',
    title: 'Loving Environment',
    text: "We prioritize your pet's safety and comfort, providing a nurturing and secure setting for them to thrive.",
  },
];

const RIGHT_ITEMS = [
  {
    icon: 'fa-solid fa-list-check',
    title: 'Comprehensive Services',
    text: "From grooming to boarding, we offer a wide range of services to meet all of your pet's needs.",
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Customer Satisfaction',
    text: 'We pride ourselves on exceptional customer service, with numerous happy clients who trust us.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-wrap">
      <svg className="doodle" style={{ top: 60, left: '5%' }} width="46" height="46" viewBox="0 0 46 46">
        <path d="M4 10 Q 14 2 22 10 T 42 8" stroke="#4FA8D8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M4 20 Q 14 12 22 20 T 42 18" stroke="#4FA8D8" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".6" />
      </svg>
      <svg className="doodle" style={{ top: 60, right: '5%' }} width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="17" stroke="#DD5232" strokeWidth="2" fill="none" strokeDasharray="4 6" />
      </svg>

      <div className="container">
        <Reveal as="div" className="text-center mx-auto mb-5 section-head">
          <span className="eyebrow justify-content-center">
            <i className="fa-solid fa-paw"></i>Why Choose Us<i className="fa-solid fa-paw"></i>
          </span>
          <h2 className="section-title mt-2">Your Pets Will Be Extremely Happy With Us</h2>
        </Reveal>

        <div className="row align-items-center g-4">
          <Reveal as="div" className="col-lg-4">
            {LEFT_ITEMS.map((item) => (
              <div className="why-item" key={item.title}>
                <div className="why-icon">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="col-lg-4">
            <div className="why-center-wrap">
              <div className="why-center">
                <img src="https://loremflickr.com/600/600/dog,cat?lock=7" alt="Dog and cat together" />
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="col-lg-4">
            {RIGHT_ITEMS.map((item) => (
              <div className="why-item right" key={item.title}>
                <div className="why-icon">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
