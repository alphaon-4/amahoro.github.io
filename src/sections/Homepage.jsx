import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Homepage.scss'; // We will create this file next

const Homepage = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={6}>
            <h1 className="display-3 fw-bold">We Build Websites That Work for You</h1>
            <p className="lead my-4">
              From stunning landing pages to complex e-commerce platforms, we create fast, responsive, and SEO-friendly websites that drive results.
            </p>
            <Button variant="success" size="lg" href="#contact">
              Request a Website
            </Button>
            <Button variant="outline-secondary" size="lg" className="ms-3" href="#portfolio">
              See Our Work
            </Button>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            {/* Placeholder for a visual/mockup */}
            <div className="hero-visual-placeholder">
              <p>Website Mockup</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Homepage;
