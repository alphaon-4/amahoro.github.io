import React from 'react';
import { Card } from 'react-bootstrap';
import './TestimonialCard.scss';

const TestimonialCard = ({ quote, author, company }) => {
  return (
    <Card className="testimonial-card h-100 text-center">
      <Card.Body className="d-flex flex-column justify-content-between">
        <i className="fas fa-quote-left quote-icon mb-3"></i>
        <Card.Text className="mb-4 flex-grow-1">"{quote}"</Card.Text>
        <div>
          <h5 className="mb-0">{author}</h5>
          <p className="text-muted">{company}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
