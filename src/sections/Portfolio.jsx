import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioItem from '../components/PortfolioItem';
import TestimonialCard from '../components/TestimonialCard';
import './Portfolio.scss';

// Import custom images
import ecommerceImage from '../assets/ecomerce.jpeg';
import saasImage from '../assets/saas.jpg';
import localbusinessImage from '../assets/localbusiness.jpg';
import cooperateImage from '../assets/cooperate.jpg';
import portfolioImage from '../assets/portofolio.jpg';
import nonprofitImage from '../assets/nonprofit.jpg';

const portfolioData = [
  {
    image: ecommerceImage,
    title: 'E-commerce Store Redesign',
    description: 'Modernized an existing online store for a fashion brand, improving UX and conversion rates.',
    category: 'E-commerce'
  },
  {
    image: saasImage,
    title: 'SaaS Landing Page',
    description: 'Designed and developed a high-converting landing page for a new software-as-a-service product.',
    category: 'SaaS'
  },
  {
    image: localbusinessImage,
    title: 'Local Business Website',
    description: 'Created a responsive and SEO-friendly website for a local restaurant, boosting online reservations.',
    category: 'Local Business'
  },
  {
    image: cooperateImage,
    title: 'Corporate Website',
    description: 'Developed a professional website for a large corporation, with a focus on brand identity and clear communication.',
    category: 'Corporate'
  },
  {
    image: portfolioImage,
    title: 'Portfolio Website',
    description: 'Designed a stunning portfolio website for a creative professional to showcase their work.',
    category: 'Portfolio'
  },
  {
    image: nonprofitImage,
    title: 'Non-profit Website',
    description: 'Built a user-friendly website for a non-profit organization to increase donations and volunteer sign-ups.',
    category: 'Non-profit'
  }
];

const testimonialsData = [
  {
    quote: 'Amahoro Tech Solutions delivered an outstanding website that perfectly captures our brand. Their attention to detail and responsiveness were exceptional!',
    author: 'Jane Doe',
    company: 'CEO, Creative Solutions'
  },
  {
    quote: 'Our new e-commerce site built by Amahoro Tech Solutions has significantly increased our sales. The process was smooth and professional from start to finish.',
    author: 'John Smith',
    company: 'Owner, Tech Gadgets Inc.'
  },
  {
    quote: 'Highly recommend Amahoro Tech Solutions! They transformed our outdated website into a modern, mobile-friendly platform. Great communication throughout the project.',
    author: 'Emily White',
    company: 'Marketing Manager, Global Corp'
  },
  {
    quote: 'The team at Amahoro Tech Solutions is incredibly talented. They took our vision and turned it into a reality that exceeded our expectations.',
    author: 'Michael Brown',
    company: 'Founder, StartupX'
  },
  {
    quote: 'Working with Amahoro Tech Solutions was a pleasure. They are true professionals who are dedicated to their clients success.',
    author: 'Sarah Green',
    company: 'Director, Non-Profit Foundation'
  },
  {
    quote: 'I was impressed by the quality of work and the speed of delivery. Amahoro Tech Solutions is the best web development company in Rwanda.',
    author: 'David Kim',
    company: 'Owner, Local Restaurant'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Portfolio</h2>
          <p className="lead text-muted">A selection of our finest work, showcasing our expertise across various industries.</p>
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
