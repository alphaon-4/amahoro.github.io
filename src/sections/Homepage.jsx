import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Homepage.scss'; // We will create this file next

const Homepage = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center text-center"> {/* Centered for full width */}
          <Col lg={12}> {/* Full width */}
            <h1 className="display-3 fw-bold animate__animated animate__fadeInUp">Your Trusted Software Company in Rwanda: We Build Websites That Work for You</h1>
            <p className="lead my-4 animate__animated animate__fadeInUp animate__delay-1s">
              Looking to build a website in Rwanda? From stunning landing pages to robust e-commerce platforms, Amahoro Tech Solutions creates fast, responsive, and SEO-friendly websites that drive results. Get your affordable and high-quality website today!
            </p>
            <Button variant="success" size="lg" href="#contact" className="animate__animated animate__fadeInUp animate__delay-2s">
              Request a Website
            </Button>
            <Button variant="outline-secondary" size="lg" className="ms-3 animate__animated animate__fadeInUp animate__delay-2s" href="#portfolio">
              See Our Work
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Homepage;
