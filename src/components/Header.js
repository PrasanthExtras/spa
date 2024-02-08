import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt="Logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Your Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            List
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
