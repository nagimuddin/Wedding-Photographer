import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../images/logo (1).png'
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut  = () => {
    signOut(auth);
  }
  return (
    <header className='header-area'>
      <Navbar sticky="top" expand='lg' bg="primary">
        <Container fluid>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-auto'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/blog'>Blog</NavLink>
              <NavLink className='nav-link' to='/aboutme'>About Me</NavLink>
              {user && <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>}
            </Nav>
          </Navbar.Collapse>
          {
            user ?
            <button onClick={handelSignOut} className='btn btn-info text-white'>Sign Out</button>
            :
            <Link to='/login' className='btn btn-light'>Sign In</Link>
          }
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
