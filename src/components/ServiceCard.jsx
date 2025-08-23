import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.scss';

const ServiceCard = ({ icon, title, text }) => {
  return (
    <Card className="service-card text-center h-100">
      <Card.Body>
        <div className="icon-wrapper mb-3">
          {icon}
        </div>
        <Card.Title as="h4">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
