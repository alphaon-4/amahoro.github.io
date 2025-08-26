import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useSubscription } from '../context/SubscriptionContext';
import './PriceTier.scss';

const PriceTier = ({ title, price, features, isFeatured, billingCycle, maintenanceFee }) => {
  const { selectSubscription } = useSubscription();

  const handleGetStartedClick = () => {
    selectSubscription({ title, price, billingCycle, maintenanceFee });
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card className={`price-tier-card text-center h-100 ${isFeatured ? 'featured' : ''}`}>
      <Card.Header className="py-4">
        <h4 className="my-0 fw-normal">{title}</h4>
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <h1 className="card-title pricing-card-title">
          ${price}
          <small className="text-muted fw-light">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</small>
        </h1>
        <ListGroup variant="flush" className="mb-3 flex-grow-1">
          {features.map((feature, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <i className="fas fa-check-circle text-success me-2"></i> {feature}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {billingCycle === 'monthly' && (
          <p className="text-muted">+ ${maintenanceFee}/mo for maintenance</p>
        )}
        <Button variant={isFeatured ? "success" : "outline-success"} size="lg" className="mt-auto" onClick={handleGetStartedClick}>
          Get Started
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PriceTier;
