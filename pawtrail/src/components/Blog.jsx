import Reveal from './Reveal.jsx';

const POSTS = [
  {
    tag: 'Pet Boarding',
    img: 'https://loremflickr.com/600/440/dog,walking?lock=101',
    alt: 'Walking a dog',
    date: 'December 3, 2026 · admin',
    title: 'Walk Your Best Doggo Friend',
    excerpt: "Essential tips to ensure your pet's happiness and mental stimulation on every route.",
  },
  {
    tag: 'Vaccine Care',
    img: 'https://loremflickr.com/600/440/dog,vet?lock=102',
    alt: 'Dog at the vet',
    date: 'December 3, 2026 · admin',
    title: 'Pet Safety Tips for the Holiday',
    excerpt: "Discover essential tips to ensure your pet's happiness and safety from ordinary hazards.",
  },
  {
    tag: 'Education Pet',
    img: 'https://loremflickr.com/600/440/puppy,training?lock=103',
    alt: 'Dog training session',
    date: 'December 3, 2026 · admin',
    title: 'Get Paid To Walk Dogs',
    excerpt: 'What it actually takes to turn a love of dogs into part-time income.',
  },
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <Reveal as="div" className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
          <div>
            <span className="eyebrow">
              <i className="fa-solid fa-paw"></i>Blogs
            </span>
            <h2 className="section-title mt-2 mb-0">See Our Pet Services News & Blogs</h2>
          </div>
          <a href="#" className="btn btn-pawtrail">
            More Blogs
          </a>
        </Reveal>

        <div className="row g-4">
          {POSTS.map((post) => (
            <Reveal as="div" className="col-md-4" key={post.title}>
              <div className="blog-card">
                <div className="blog-img">
                  <span className="blog-tag">{post.tag}</span>
                  <img src={post.img} alt={post.alt} />
                </div>
                <div className="p-4">
                  <div className="blog-meta">
                    <i className="fa-regular fa-calendar me-1"></i>
                    {post.date}
                  </div>
                  <h4>{post.title}</h4>
                  <p style={{ color: '#5c6b62', fontSize: '.9rem' }}>{post.excerpt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
