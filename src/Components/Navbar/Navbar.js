import React from "react";
import "./Navbar.css";
import tiessLogo from "../../images/TiessLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar expand="sm" id="navbar-container" expand="lg">
      <ReactBootStrap.Container id="inner-container" fluid="true">
        <ReactBootStrap.Navbar.Brand href="#home">
          <img src={tiessLogo} alt="Tiess Logo" id="tiess-logo" />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle
          aria-controls="basic-navbar-nav"
          id="white"
        >
          <i class="fas fa-bars"></i>
        </ReactBootStrap.Navbar.Toggle>
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav id="link-home">
              <Link exact to="/" className="navlink">
                Home
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav id="link-products">
              <Link exact to="/products" className="navlink">
                Products
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav id="link-design">
              <Link exact to="/design" className="navlink">
                Design
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav id="link-my-designs">
              <Link exact to="/my-designs" className="navlink">
                My Designs
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav id="link-about">
              <Link exact to="/about" className="navlink">
                About
              </Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
