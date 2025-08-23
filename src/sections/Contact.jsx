import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Spinner } from 'react-bootstrap';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success-animation.json'; // I will add this file later
import './Contact.scss';

const Contact = ({ totalCost }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    siteType: '',
    budget: '',
    style: '',
    message: '',
    email: '',
    phone: ''
  });
  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleConfirmSubmit = () => {
    setIsSubmitting(true);
    setShowSummary(false);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        organization: '',
        siteType: '',
        budget: '',
        style: '',
        message: '',
        email: '',
        phone: ''
      });
    }, 2000);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Get Your Project Started</h2>
          <p className="lead text-muted">Fill out the form below or reach out to us directly.</p>
        </div>
        <Row>
          <Col lg={7} className="mb-4 mb-lg-0">
            <Form onSubmit={handleSubmit} className="contact-form p-4 shadow-sm rounded">
              <h4 className="mb-4">Request a Website</h4>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formOrganization">
                  <Form.Label>Organization (Optional)</Form.Label>
                  <Form.Control type="text" placeholder="Your Company" name="organization" value={formData.organization} onChange={handleChange} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formPhone">
                  <Form.Label>Phone (Optional)</Form.Label>
                  <Form.Control type="tel" placeholder="Your Phone" name="phone" value={formData.phone} onChange={handleChange} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formSiteType">
                  <Form.Label>Type of Site</Form.Label>
                  <Form.Control as="select" name="siteType" value={formData.siteType} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>Business Website</option>
                    <option>E-commerce Store</option>
                    <option>Landing Page</option>
                    <option>Portfolio</option>
                    <option>Blog</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formBudget">
                  <Form.Label>Budget Range</Form.Label>
                  <Form.Control as="select" name="budget" value={formData.budget} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>$500 - $1,500</option>
                    <option>$1,500 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000+</option>
                  </Form.Control>
                </Form.Group>
              </Row>

              <Form.Group controlId="formStyle" className="mb-3">
                <Form.Label>Preferred Style</Form.Label>
                <Form.Control as="select" name="style" value={formData.style} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option>Modern</option>
                  <option>Minimalist</option>
                  <option>Creative</option>
                  <option>Corporate</option>
                  <option>Elegant</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Tell us about your project</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Describe your vision and requirements..." name="message" value={formData.message} onChange={handleChange} />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Review & Submit'}
              </Button>
            </Form>
          </Col>
          <Col lg={5}>
            <div className="contact-info p-4 shadow-sm rounded h-100 d-flex flex-column justify-content-center">
              <h4 className="mb-4">Contact Information</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-envelope me-2 text-success"></i>
                  <a href="mailto:info@websprout.com" className="text-decoration-none text-dark">info@websprout.com</a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone me-2 text-success"></i>
                  <a href="tel:+1234567890" className="text-decoration-none text-dark">+1 (234) 567-890</a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-map-marker-alt me-2 text-success"></i>
                  123 Web Street, Suite 456, Digital City, DC 12345
                </li>
              </ul>
              <div className="mt-4">
                <Button variant="primary" className="w-100 mb-2">Download Business Proposal</Button>
                <Button variant="outline-primary" className="w-100">Book a Free Consultation</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Modal show={showSummary} onHide={() => setShowSummary(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Review Your Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Organization:</strong> {formData.organization}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Site Type:</strong> {formData.siteType}</p>
            <p><strong>Budget:</strong> {formData.budget}</p>
            <p><strong>Style:</strong> {formData.style}</p>
            <p><strong>Message:</strong> {formData.message}</p>
            <hr />
            <p className="fw-bold">Estimated Cost: <span className="text-success">${totalCost}</span></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSummary(false)}>
              Go Back
            </Button>
            <Button variant="success" onClick={handleConfirmSubmit}>
              {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Confirm & Send'}
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showSuccess} onHide={handleCloseSuccess} centered>
          <Modal.Body className="text-center">
            <Lottie animationData={successAnimation} loop={false} style={{ height: 150 }} />
            <h4 className="mt-3">Request Sent!</h4>
            <p>Thank you for your inquiry. We will get back to you soon.</p>
            <Button variant="success" onClick={handleCloseSuccess}>
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Contact;
