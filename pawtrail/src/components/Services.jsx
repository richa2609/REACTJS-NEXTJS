import Reveal from './Reveal.jsx';

const SERVICES = [
  {
    icon: 'fa-solid fa-bone',
    circleClass: 'circle-1',
    title: 'Dog Care',
    text: 'Our Dog Care services include grooming, walking, and training. We ensure your furry friend is happy and healthy.',
  },
  {
    icon: 'fa-solid fa-cat',
    circleClass: 'circle-2',
    title: 'Cat Care',
    text: 'At Pawtrail, we offer specialized cat care services including grooming, boarding, and in-home visits from dedicated experts.',
  },
  {
    icon: 'fa-solid fa-shower',
    circleClass: 'circle-3',
    title: 'Pet Grooming',
    text: 'Keep your pet looking their best with our full-service grooming. From baths to nail trims, our expert groomers handle it all.',
  },
];

export default function Services() {
  return (
    <section className="section pt-3" id="services">
      <div className="container">
        <Reveal as="div" className="text-center mx-auto mb-5 section-head">
          <span className="eyebrow justify-content-center">
            <i className="fa-solid fa-paw"></i>Our Services<i className="fa-solid fa-paw"></i>
          </span>
          <h2 className="section-title mt-2">Our one-stop solution for premium pet care</h2>
        </Reveal>

        <div className="row g-4 justify-content-center">
          {SERVICES.map((service) => (
            <Reveal as="div" className="col-md-4" key={service.title}>
              <div className="service-circle-wrap">
                <div className={`service-circle ${service.circleClass}`}>
                  <i className={service.icon}></i>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="services-cta">
          <a href="#pricing" className="btn btn-pawtrail mt-3">
            More Services
          </a>
        </Reveal>
      </div>
    </section>
  );
}
