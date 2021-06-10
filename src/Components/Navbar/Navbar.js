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
            <ReactBootStrap.Nav.Link id="link-home" href="home">
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav id="link-products">
              <Link to="/products">Products</Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link id="link-design" href="design">
              Design
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link id="link-my-designs" href="my-designs">
              My Designs
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link id="link-about" href="about">
              About
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
