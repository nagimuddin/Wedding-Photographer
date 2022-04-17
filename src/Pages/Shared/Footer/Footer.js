import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer className="py-3 my-4">
        <p  className="text-center text-muted"> <img src={logo} alt="" /> Copyright @ {new Date().getFullYear()}</p>
      </footer>
    );
};

export default Footer;