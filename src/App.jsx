import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Team from './components/Team.jsx';
import Appointment from './components/Appointment.jsx';
import Blog from './components/Blog.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Team />
      <Appointment />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
