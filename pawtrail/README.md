# Pawtrail — React + Vite

A React/Vite port of the Pawtrail pet-care landing page, using Bootstrap 5, Google Fonts (Baloo 2 / Jost), and Font Awesome via CDN — same design tokens and CSS as the original static page.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
index.html                 Vite HTML entry (Bootstrap/Fonts/Font Awesome CDN links)
src/main.jsx                React entry point
src/index.css               Global stylesheet (all design tokens + component styles)
src/App.jsx                 Composes every section in page order
src/hooks/useReveal.js       IntersectionObserver hook for scroll-reveal animation
src/components/
  Reveal.jsx                 Reusable "fade up on scroll" wrapper (replaces .reveal/.reveal.in)
  Navbar.jsx                 Sticky nav, scroll shadow, mobile toggle
  Hero.jsx                   Hero header
  Services.jsx                Services circles
  About.jsx                   About section
  WhyChooseUs.jsx              Why-choose-us layout
  Pricing.jsx                  Pricing cards
  Testimonials.jsx             State-driven testimonial carousel
  Team.jsx                     Team grid
  Appointment.jsx              Appointment form
  Blog.jsx                     Blog card grid
  Newsletter.jsx                Newsletter signup
  Footer.jsx                    Site footer
```

## Notes

- All animations/interactivity from the original vanilla-JS `<script>` block (scroll shadow on navbar, `IntersectionObserver` reveals, testimonial carousel, form "submitted" states) have been re-implemented with React state/hooks — no jQuery or manual DOM manipulation.
- Bootstrap's JS bundle is still loaded via CDN in `index.html` for components that rely on its CSS-driven behavior (none of the current components strictly need the JS, but it's there if you extend the navbar/collapse).
