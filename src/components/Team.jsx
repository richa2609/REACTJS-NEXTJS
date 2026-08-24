import Reveal from './Reveal.jsx';

const TEAM = [
  {
    img: 'https://loremflickr.com/500/500/veterinarian,woman,stethoscope?lock=610',
    alt: 'Pearlie Bowman, Veterinarian, in her scrubs',
    name: 'Pearlie Bowman',
    role: 'Veterinarian',
  },
  {
    img: 'https://loremflickr.com/500/500/petgroomer,man,dog?lock=620',
    alt: 'David Warner, Pet Groomer, grooming a dog',
    name: 'David Warner',
    role: 'Pet Groomer',
  },
  {
    img: 'https://loremflickr.com/500/500/woman,puppy,smiling?lock=630',
    alt: 'Brooklyn Simmons, Pet Nutritionist, holding a puppy',
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
