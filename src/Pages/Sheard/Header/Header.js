import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            
            
            
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
  <Container>
  <Navbar.Brand href="#home">Wildlife</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </header>
    );
};

export default Header;