import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            
            
            
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/">Wildlife</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      
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