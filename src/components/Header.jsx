import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <i className="fas fa-feather-alt me-2" style={{ color: 'green' }}></i>
          <span style={{ fontWeight: 'bold' }}>Websprout</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">Why Us?</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-success" className="ms-lg-3">Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
