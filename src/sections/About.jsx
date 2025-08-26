import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Why Choose Amahoro Tech Solutions in Rwanda?</h2>
          <p className="lead text-muted">As a leading software company in Rwanda, we're more than just web developers; we're your partners in digital success.</p>
        </div>
        <Row className="g-4 text-center">
          <Col md={4}>
            <div className="about-item p-4">
              <i className="fas fa-dollar-sign about-icon mb-3"></i>
              <h4>Affordable Excellence</h4>
              <p>Get high-quality, professional websites in Rwanda without breaking the bank. We offer transparent and fair pricing for all our software solutions.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-item p-4">
              <i className="fas fa-tachometer-alt about-icon mb-3"></i>
              <h4>Fast Delivery</h4>
              <p>We understand the importance of time. Our streamlined process ensures your website or software solution is ready quickly for the Rwandan market.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-item p-4">
              <i className="fas fa-lightbulb about-icon mb-3"></i>
              <h4>Creative & Unique</h4>
              <p>Stand out from the crowd with bespoke designs that reflect your brand's unique identity and vision, crafted for businesses in Rwanda.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-item p-4">
              <i className="fas fa-mobile-alt about-icon mb-3"></i>
              <h4>Mobile-Ready & Responsive</h4>
              <p>Every website we build looks stunning and functions perfectly on all devices, from desktops to smartphones, crucial for the Rwandan audience.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-item p-4">
              <i className="fas fa-shield-alt about-icon mb-3"></i>
              <h4>SEO-Friendly Foundation</h4>
              <p>We build with search engines in mind, giving your website the best chance to rank high and attract organic traffic from Rwanda and beyond.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-item p-4">
              <i className="fas fa-handshake about-icon mb-3"></i>
              <h4>Guaranteed Satisfaction</h4>
              <p>Your success is our priority. We work closely with you to ensure you're thrilled with the final product, whether it's a website or custom software for your Rwandan business.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
