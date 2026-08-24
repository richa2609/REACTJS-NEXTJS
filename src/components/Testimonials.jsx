import { useState } from 'react';
import Reveal from './Reveal.jsx';

const TESTIMONIALS = [
  {
    text: "The facility was clean, well-maintained, and had plenty of space for my dog to play and socialize with other dogs. The staff was attentive, caring, and provided regular updates on my dog's activities. It was clear that they treated my dog like family. I wouldn't hesitate to board my dog with them again!",
    name: 'David Warner',
    role: '— Dog Owner',
    score: '4.9',
    count: '128 Reviews',
    img: 'https://loremflickr.com/400/400/man,dog,smiling?lock=901',
    alt: 'David Warner smiling with his dog',
  },
  {
    text: "Booking a grooming slot used to be a hassle everywhere else. Pawtrail's team is fast, gentle with nervous cats, and genuinely seems to enjoy the work.",
    name: 'Maria Chen',
    role: '— Cat Owner',
    score: '4.8',
    count: '96 Reviews',
    img: 'https://loremflickr.com/400/400/woman,cat,portrait?lock=902',
    alt: 'Maria Chen holding her cat',
  },
  {
    text: 'Our lab has separation anxiety and their boarding staff worked with her routine instead of forcing their own. She came home calm, which has never happened before.',
    name: 'Alex Ruiz',
    role: '— Dog Owner',
    score: '5.0',
    count: '64 Reviews',
    img: 'https://loremflickr.com/400/400/man,labrador?lock=903',
    alt: 'Alex Ruiz with his labrador',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const goPrev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="section">
      <div className="container">
        <Reveal as="div" className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
          <div>
            <span className="eyebrow">
              <i className="fa-solid fa-paw"></i>Testimonial
            </span>
            <h2 className="section-title mt-2 mb-0">Here from Our Happy Pet Owners</h2>
          </div>
          <div className="d-flex gap-2">
            <button className="testi-nav-btn" onClick={goPrev} aria-label="Previous testimonial">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="testi-nav-btn" onClick={goNext} aria-label="Next testimonial">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </Reveal>

        <Reveal as="div" className="testi-card">
          <div className="row align-items-center g-4">
            <div className="col-lg-2 col-md-3">
              <div className="testi-photo">
                <img src={active.img} alt={active.alt} />
              </div>
            </div>
            <div className="col-lg-10 col-md-9 position-relative">
              <div className="testi-quote">"Exceptional experiences"</div>
              <p>{active.text}</p>
              <strong>{active.name}</strong> <span style={{ opacity: 0.85 }}>{active.role}</span>
              <div className="rating-badge">
                <strong>{active.score}</strong>
                <span className="stars">★★★★★</span>
                <small>{active.count}</small>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
