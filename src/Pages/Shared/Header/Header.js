import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo (1).png'

const Header = () => {
  return (
    <Navbar bg="info" sticky="top" variant="dark">
    <Container>
  <Navbar.Brand as={Link} to="/" className="fs-3">
    <img src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  );
};

export default Header;
