import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p>&copy; {currentYear} Amahoro Tech Solutions. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Link href="#" className="text-white"><i className="fab fa-twitter" style={{ fontSize: '24px' }}></i></Nav.Link>
              <Nav.Link href="#" className="text-white"><i className="fab fa-linkedin-in" style={{ fontSize: '24px' }}></i></Nav.Link>
              <Nav.Link href="#" className="text-white"><i className="fab fa-github" style={{ fontSize: '24px' }}></i></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
