import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './PriceTier.scss';

const PriceTier = ({ title, price, features, isFeatured, billingCycle }) => {
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
        <Button variant={isFeatured ? "success" : "outline-success"} size="lg" className="mt-auto">
          Get Started
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PriceTier;
