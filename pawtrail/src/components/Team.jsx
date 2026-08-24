import Reveal from './Reveal.jsx';

const TEAM = [
  {
    img: 'https://loremflickr.com/500/500/woman,dog,portrait?lock=61',
    alt: 'Pearlie Bowman, Veterinarian',
    name: 'Pearlie Bowman',
    role: 'Veterinarian',
  },
  {
    img: 'https://loremflickr.com/500/500/man,cat,portrait?lock=62',
    alt: 'David Warner, Pet Groomer',
    name: 'David Warner',
    role: 'Pet Groomer',
  },
  {
    img: 'https://loremflickr.com/500/500/woman,puppy,portrait?lock=63',
    alt: 'Brooklyn Simmons, Pet Nutritionist',
    name: 'Brooklyn Simmons',
    role: 'Pet Nutritionist',
  },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <Reveal as="div" className="text-center mx-auto mb-5 section-head">
          <span className="eyebrow justify-content-center">
            <i className="fa-solid fa-paw"></i>Team Members<i className="fa-solid fa-paw"></i>
          </span>
          <h2 className="section-title mt-2">Meet Our Experienced Pet Care Team</h2>
        </Reveal>

        <div className="row g-4 text-center">
          {TEAM.map((member) => (
            <Reveal as="div" className="col-md-4 team-card" key={member.name}>
              <div className="team-photo">
                <img src={member.img} alt={member.alt} />
              </div>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <div className="mt-3">
                <a href="#" className="social-dot">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="social-dot">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
