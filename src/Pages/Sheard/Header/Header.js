
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user]= useAuthState(auth);
  const handalsignin=()=>{
    signOut(auth);
  }
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
      {
        user ?
        <button onClick={handalsignin}>signout</button>
        :
        <Nav.Link as={Link} to="login">Login</Nav.Link>
        }
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