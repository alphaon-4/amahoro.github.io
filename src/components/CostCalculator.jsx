import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './CostCalculator.scss';

const features = [
  { id: 'basic', name: 'Basic Website (Up to 5 pages)', price: 1000 },
  { id: 'ecommerce', name: 'E-commerce Functionality', price: 1500 },
  { id: 'blog', name: 'Integrated Blog', price: 300 },
  { id: 'booking', name: 'Online Booking System', price: 700 },
  { id: 'customDesign', name: 'Custom Design & Branding', price: 800 },
  { id: 'seo', name: 'Advanced SEO Package', price: 500 },
  { id: 'maintenance', name: '1 Year Maintenance & Support', price: 400 },
  { id: 'socialMedia', name: 'Social Media Integration', price: 150 },
];

const CostCalculator = ({ setTotalCost }) => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [total, setTotal] = useState(0);
  const [isSubscription, setIsSubscription] = useState(false);

  useEffect(() => {
    const calculatedCost = selectedFeatures.reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return sum + (feature ? feature.price : 0);
    }, 0);
    setTotal(calculatedCost);
    setTotalCost(calculatedCost);
  }, [selectedFeatures, setTotalCost]);

  const handleFeatureChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedFeatures([...selectedFeatures, id]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(featureId => featureId !== id));
    }
  };

  const handleSubscriptionChange = (e) => {
    setIsSubscription(e.target.checked);
  };

  const getSubscriptionPrice = (total) => {
    return (total / 12).toFixed(2);
  };

  return (
    <section id="cost-calculator" className="cost-calculator-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Website Cost Calculator</h2>
          <p className="lead text-muted">Estimate the cost of your dream website by selecting the features you need.</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <Form>
                  <Row>
                    {features.map(feature => (
                      <Col md={6} key={feature.id}>
                        <Form.Check
                          type="checkbox"
                          id={feature.id}
                          label={`${feature.name} (${feature.price})`}
                          onChange={handleFeatureChange}
                          className="mb-2"
                        />
                      </Col>
                    ))}
                  </Row>
                  <hr className="my-4" />
                  <Form.Check
                    type="checkbox"
                    id="subscription-checkbox"
                    label="Pay with subscription (spread the cost over 12 months)"
                    onChange={handleSubscriptionChange}
                    className="mb-3"
                  />
                </Form>
                <hr className="my-4" />
                <div className="text-center">
                  <h3>Estimated Cost: <span className="text-success display-6 fw-bold">${isSubscription ? `${getSubscriptionPrice(total)}/mo` : total}</span></h3>
                  <p className="text-muted">This is an estimate. For a precise quote, please use our contact form.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CostCalculator;
