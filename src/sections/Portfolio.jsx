import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioItem from '../components/PortfolioItem';
import TestimonialCard from '../components/TestimonialCard';
import './Portfolio.scss';

// Placeholder images - in a real app, these would be actual project screenshots
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const portfolioData = [
  {
    image: project1,
    title: 'E-commerce Store Redesign',
    description: 'Modernized an existing online store for a fashion brand, improving UX and conversion rates.',
    link: '#'
  },
  {
    image: project2,
    title: 'SaaS Landing Page',
    description: 'Designed and developed a high-converting landing page for a new software-as-a-service product.',
    link: '#'
  },
  {
    image: project3,
    title: 'Local Business Website',
    description: 'Created a responsive and SEO-friendly website for a local restaurant, boosting online reservations.',
    link: '#'
  }
];

const testimonialsData = [
  {
    quote: 'Websprout delivered an outstanding website that perfectly captures our brand. Their attention to detail and responsiveness were exceptional!',
    author: 'Jane Doe',
    company: 'CEO, Creative Solutions'
  },
  {
    quote: 'Our new e-commerce site built by Websprout has significantly increased our sales. The process was smooth and professional from start to finish.',
    author: 'John Smith',
    company: 'Owner, Tech Gadgets Inc.'
  },
  {
    quote: 'Highly recommend Websprout! They transformed our outdated website into a modern, mobile-friendly platform. Great communication throughout the project.',
    author: 'Emily White',
    company: 'Marketing Manager, Global Corp'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Recent Work</h2>
          <p className="lead text-muted">Showcasing some of our best projects and client success stories.</p>
        </div>
        <Row className="g-4 mb-5">
          {portfolioData.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <PortfolioItem {...item} />
            </Col>
          ))}
        </Row>

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">What Our Clients Say</h2>
          <p className="lead text-muted">Hear directly from businesses we've helped grow.</p>
        </div>
        <Row className="g-4 justify-content-center">
          {testimonialsData.map((testimonial, index) => (
            <Col md={6} lg={4} key={index}>
              <TestimonialCard {...testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
