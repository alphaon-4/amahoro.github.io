import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PortfolioItem.scss';

const PortfolioItem = ({ image, title, description, link }) => {
  return (
    <Card className="portfolio-item h-100">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Button variant="outline-primary" href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PortfolioItem;
