import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ResponsiveMockup.scss';

const ResponsiveMockup = () => {
  return (
    <section className="responsive-mockup-section py-5">
      <Container>
        <Row className="justify-content-center align-items-end">
          <Col lg={6} className="d-none d-lg-block">
            <div className="device-mockup desktop">
              <img src="https://placehold.co/1200x750/EEE/31343C?text=Desktop+View" alt="Desktop Mockup" className="img-fluid" />
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="device-mockup tablet">
              <img src="https://placehold.co/768x1024/EEE/31343C?text=Tablet+View" alt="Tablet Mockup" className="img-fluid" />
            </div>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <div className="device-mockup mobile">
              <img src="https://placehold.co/375x667/EEE/31343C?text=Mobile+View" alt="Mobile Mockup" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Responsive Design in Action</h2>
          <p className="lead text-muted">See how your website will look flawless on any device.</p>
        </div>
      </Container>
    </section>
  );
};

export default ResponsiveMockup;