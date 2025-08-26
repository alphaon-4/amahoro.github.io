import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal, Spinner } from 'react-bootstrap';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success-animation.json'; // I will add this file later
import './Contact.scss';
import { useSubscription } from '../context/SubscriptionContext';
import emailjs from 'emailjs-com';

const Contact = ({ totalCost, selectedFeatures, features, fee }) => {
  const { selectedSubscription, clearSubscription } = useSubscription();

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    siteType: '',
    style: '',
    message: '',
    email: '',
    phone: ''
  });
  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (selectedSubscription) {
      setFormData(prevData => ({
        ...prevData,
        siteType: selectedSubscription.title,
        // budget: `${selectedSubscription.price} - ${selectedSubscription.billingCycle === 'monthly' ? 'mo' : 'yr'}`, // Removed budget
      }));
    }
  }, [selectedSubscription]);

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

    const serviceId = 'service_hgpvfix'; // Your EmailJS Service ID
    const templateId = 'template_juyewmj'; // Your EmailJS Template ID
    const publicKey = 'tnyyTCnnB8bhNeKVK'; // Your EmailJS Public Key

    const htmlMessage = `
      ${selectedSubscription ? `
        <p><strong>Selected Plan:</strong> ${selectedSubscription.title}</p>
        <p><strong>Price:</strong> ${selectedSubscription.price}</p>
        <p><strong>Payment Plan:</strong> ${selectedSubscription.billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</p>
        <p><strong>Maintenance Fee:</strong> ${selectedSubscription.maintenanceFee}/month</p>
      ` : ''}
      ${selectedFeatures.length > 0 ? `
        <hr />
        <p><strong>Selected Features:</strong></p>
        <ul>
          ${selectedFeatures.map(featureId => {
            const feature = features.find(f => f.id === featureId);
            return feature ? `<li>${feature.name}</li>` : '';
          }).join('')}
        </ul>
      ` : ''}
      <hr />
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Organization:</strong> ${formData.organization}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Site Type:</strong> ${formData.siteType}</p>
      <p><strong>Style:</strong> ${formData.style}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      <hr />
      <p><strong>Estimated Cost:</strong> ${totalCost - (selectedSubscription ? selectedSubscription.maintenanceFee : 0) - (fee > 0 && !selectedSubscription ? fee : 0)}</p>
      ${!selectedSubscription && fee > 0 ? `
        <p><strong>Fee:</strong> ${fee}</p>
      ` : ''}
      ${selectedSubscription ? `
        <p><strong>Maintenance Fee:</strong> ${selectedSubscription.maintenanceFee}/month</p>
        <p class="text-muted small">Includes domain renewal, software updates, server maintenance, and support.</p>
      ` : ''}
      <p><strong>Total Cost:</strong> ${totalCost}</p>
    `;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'zeroma@amahorotechsolution.work.gd', // Recipient email
      html_message: htmlMessage, // Pass the HTML message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
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
        clearSubscription();
      })
      .catch((err) => {
        console.error('Failed to send email. Error: ', err);
        setIsSubmitting(false);
        // Optionally show an error message to the user
        alert('Failed to send your request. Please try again later.');
      });
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    clearSubscription(); // Clear selected subscription when success modal is closed
  };

  const featuresCost = selectedFeatures.reduce((sum, featureId) => {
    const feature = features.find(f => f.id === featureId);
    return sum + (feature ? feature.price : 0);
  }, 0);

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Get Your Project Started in Rwanda</h2>
          <p className="lead text-muted">Fill out the form below to request a website or software solution, or reach out to our team in Rwanda directly.</p>
        </div>
        <Row>
          <Col lg={7} className="mb-4 mb-lg-0">
            <Form onSubmit={handleSubmit} className="contact-form p-4 shadow-sm rounded">
              <h4 className="mb-4">Request a Website or Software Solution</h4>
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
                  <Form.Label>Type of Solution</Form.Label>
                  <Form.Control as="select" name="siteType" value={formData.siteType} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>Business Website</option>
                    <option>E-commerce Store</option>
                    <option>Landing Page</option>
                    <option>Portfolio</option>
                    <option>Blog</option>
                    <option>Custom Software Development</option>
                    <option>Mobile App Development</option>
                    <option>Other</option>
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
              <h4 className="mb-4">Contact Information (Rwanda)</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-envelope me-2 text-success"></i>
                  <a href="mailto:zeroma@amahorotechsolution.work.gd" className="text-decoration-none text-dark">zeroma@amahorotechsolutions.work.gd</a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone me-2 text-success"></i>
                  <a href="tel:+250791453579" className="text-decoration-none text-dark">+250791453579</a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-map-marker-alt me-2 text-success"></i>
                  KG 543 St, Kigali, Rwanda
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
            {selectedSubscription && (
              <>
                <p><strong>Selected Plan:</strong> {selectedSubscription.title}</p>
                <p><strong>Price:</strong> ${selectedSubscription.price}</p>
                <p><strong>Payment Plan:</strong> {selectedSubscription.billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</p>
                <p><strong>Maintenance Fee:</strong> ${selectedSubscription.maintenanceFee}/month</p>
              </>
            )}
            {selectedFeatures.length > 0 && (
              <>
                <hr />
                <p><strong>Selected Features:</strong></p>
                <ul>
                  {selectedFeatures.map(featureId => {
                    const feature = features.find(f => f.id === featureId);
                    return <li key={featureId}>{feature.name}</li>;
                  })}
                </ul>
              </>
            )}
            <hr />
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Organization:</strong> {formData.organization}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Site Type:</strong> {formData.siteType}</p>
            
            <p><strong>Style:</strong> {formData.style}</p>
            <p><strong>Message:</strong> {formData.message}</p>
            <hr />
            <p className="fw-bold">Estimated Cost: <span className="text-success">${featuresCost}</span></p>
            {!selectedSubscription && fee > 0 && (
              <>
                <p className="fw-bold">Fee: <span className="text-primary">${fee}</span></p>
                <hr />
                <p className="fw-bold">Total Cost: <span className="text-success">${totalCost}</span></p>
              </>
            )}
            {selectedSubscription && (
              <>
                <p className="fw-bold">Maintenance Fee: <span className="text-primary">${selectedSubscription.maintenanceFee}/month</span></p>
                <p className="text-muted small">Includes domain renewal, software updates, server maintenance, and support.</p>
                <hr />
                <p className="fw-bold">Total Cost: <span className="text-success">${totalCost}</span></p>
              </>
            )}
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